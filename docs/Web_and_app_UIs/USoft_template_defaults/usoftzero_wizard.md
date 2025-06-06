---
id: usoftzero_wizard
---

# usoft-zero wizard

The usoft-zero web default comes with a wizard. This wizard can be used to add data in steps. This may be necessary if you want to add data for a parent table and a child table in a single transaction.

Think of orders with order lines, where each order must have at least 1 order line. This can be handled by a wizard performing 2 steps. The first step inserts the order record. The second step inserts the order line record. The user can optionally add more order lines. See the Example in the bottom half of this article.

A wizard has a header, subtitle, step indicator, body with steps, and footer with buttons.

### Header

The header contains a New label, an Edit label, and a custom label that the developer is to specify. The New and the Edit label will automatically be shown or hidden, depending on the for-edit class or the for-new class on the wizard. The custom label could be the object name of the parent table, in our example ‘order' or 'sales order’.

### Subtitle

A wizard should contain a subtitle label for every step. The wizard will take care of showing the correct label when stepping through the wizard on condition that the labels are specified in the correct order, which is the order of the steps. For example:

1. 
2. 

### Step indicator

The step indicator visualises the total number of steps of the wizard and the step that the user is currently at.

No developer action is required. The step indicator is delivered as a working default.

### Body and steps

A wizard comes with 2 default (empty) steps. The developer can add more steps. The contents of the steps must be created by the developer.

The easiest way to create content for a wizard step is to copy the contents from the body of the offcanvas edit pane of an infoPage into a wizard step. Make sure that:

- There is a correct data source in your page.


- The data sources for any dropdowns are present.



### Footer

The footer contains Previous and Next buttons and a ‘save’ button. The wizard takes care of showing and hiding these buttons. The Previous and Next buttons use the corresponding events on the wizard to perform actions.

**‘saveeandnew’ button**

The developer can add a ‘Save and New’ button. The ‘saveandnew’ button can be found under the buttons in the controls panel. The 'saveandnew’ button is best placed immediately next to the Save button. If you insert it, It will be automatically positioned correctly and in the application, it will show up during the last wizard step.

The developer should include a ‘settings’ and a ‘saveandnew' event in the page. The ‘settings' event is best copied from an infoPage and then adjusted. The 'saveandnew’ event can be found in the catalog. If needed, the developer can adjust the 'saveandnew’ trigger.

### Events/triggers

The wizard comes with the following events or triggers:

|**Event/trigger**|**Description**|
|--------|--------|
|onload  |<p>Creates the step indicators.</p><p>Of no concern to the developer.</p>|
|next    |<p>If there are no errors, proceed to the next step.</p><p>It is very probable that the developer needs to add extra logic, for example to create records or to perform a CheckData action in order to get a server-generated primary key value. See the example below.</p>|
|previous|<p>Goes back to the previous step (unconditionally).</p><p>Of no concern to the Developer.</p>|
|hidden.bs.offcanvas.rollback|<p>When closing the wizard, this:</p><p>- <p>re-initialises the validator.</p><br/>- <p>performs a rollback.</p><br/>- <p>calls the page's refreshdatasource event if data was committed.</p><br/>- <p>calls the page’s showhideelements event.</p><br/></p><p>Normally this trigger requires no change, but you may want to add enhancements. See the example below.</p>|
|setstepindicator|<p>Update the presentation of the step indicator.</p><p>Of no concern to the developer.</p>|
|showhide|<p>- <p>Shows the correct subtitle.</p><br/>- <p>Shows the correct buttons.</p><br/></p><p>Of no concern to the developer.</p>|



## Example: Insert sales order with orderlines

In this example, a wizard combines the INSERT of an order record (Step 1) and the INSERT of the first orderline record for that order (Step 2).

*Design*

At the end of the wizard, the user has the option to add more orderlines.

A page is created with the same functionality as a DetailPage but with the addition of a wizard. When the page opens, it opens with the wizard taking the user through the steps of inserting an order and then inserting order lines.

- If the wizard closes after some data is entered and saved, the user remains in the page and the page will behave like a normal DetailPage.
- If the wizard closes before data is saved, the page will be closed.

### DetailPage ORDER – create with wizard

In the catalog, create a subclass of “DetailPage ORDER” named: “DetailPage ORDER – create with wizard”.

Make sure the user can reach this page. Typically, add a button for this purpose in “InfoPage ORDER”. The developer is required to do this manually.

### Wizard

On “DetailPage ORDER – create with wizard”, drag a wizard control from the Controls tab of the catalog. Find this under HTMLElementControl/DIV.

We want a wizard with 2 steps. Step 1 for entering the order and Step 2 for entering order lines.

For Step 1:

- Copy the fields for order entry from the offcanvasRightEditBody object in "InfoPage ORDER”.
- Paste te content under Wizard/wizard-body/wizard-body/step-1.

For Step 2:

- Copy the fields for order entry from the offcanvasRightEditBody object in "InfoPage ORDERLINE”.
- Paste te content under Wizard/wizard-body/wizard-body/step-2.

### Data sources

On “DetailPage ORDER – create with wizard”, create data sources ORDER and ORDERLINE, where ORDERLINE is a related data source.

Change the ORDER data source to relate to the ORDER data source in the calling page.

### Open wizard

When the page opens, we want the wizard to open and a new record line to be created for the order.

On the wizard, add an **onloadopenwizard** (type: onload) event that:

- Creates a new ORDER row (See code under the New button) and then
- Opens the wizard.

```js
bootstrap.Offcanvas.getOrCreateInstance($('#wizard')[0]).show();
```

### Close window

If the wizard is canceled and no data was added, we want to close the page and return to the calling InfoPage.

On the wizard, add a step to the hidden.bs.offcanvas trigger:

```js
result
	.then(() => {
			if (!$.udb('SALES_ORDER').rowCount()) {
				return $.udb.closePage();
			}
		})
```

Notice that ‘result’ is a Promise. The promise is set in the first step of the trigger.

### Page triggers

Add the following triggers on the page.

**onloadopenwizard (type: onload)**

See above.

**onloadshowhideelements (type: onload)**

```js
$(this).find('.DetailCard, .RelatedCard').trigger('showhideelements');
```

**pageshow**

Inherited from the superclass. No need to change it.

**refreshdata**

```js
options.result = $.udb('DetailCard SALES_ORDER/SALES_ORDER').executeQuery()
	.then(() => $.udb('RelatedCard ORDER_LINE of SALES_ORDER/ORDER_LINE').executeQuery())
;
```

The difficulty here is that the trigger is called from the ‘saveandnew' and that the 'saveandnew’ will perform a create record. You must be sure that the refreshdata is finished before the create record will be performed, otherwise the new (empty) record will be checked because of the queries being fired.

Another issue is that on the ORDER datasource the refresh will not work since no data has been queried in first instance. An executeQuery() must be used.

**saveandnew**

```js
let $page = $(this);
let settings = getSettings($page);
let $offcanvas = $(settings.offcanvas);
let fields = $offcanvas.find('.EditField:visible').find('input, select, textarea');

event.stopPropagation();

// Check all fields and get messages if necessary
fields.each((i, elem) => $(elem).valid() || true); 

if (fields.valid()) {
	$.udb.wait(true)
	$.udb.commit({quiet: true})
		.then(() => $page.data('committed', true))
		.then(() => {
			let result = {result: Promise.resolve(true)};

			$page.trigger('refreshdata', [result]);

			return result.result;
		})
		.then(() => $.udb(settings.ds_table).rowCreate(settings.rowCreateOptions))
		.then(() => $offcanvas.trigger('enabledisablebuttons'))
		.finally(() => $.udb.wait(false))
	;
}
```

This is the standard ‘saveandnew' with, additionally, the call to the 'refreshdata’ trigger. The trigger must be called and finished before the record is created. Otherwise, checks will be performed on the newly created empty record.

**settings**

```js
event.stopPropagation();

options.settings.ds_table = 'ORDER_LINE';
options.settings.offcanvas = '#wizard';
options.settings.rowCreateOptions = {};
```

This must contain the settings for the ORDERLINE as the settings will be called from the ‘saveandnew' and the 'saveandnew’ will only show on the last wizard step, which is the wizard step for ORDERLINE.

### Wizard triggers and buttons

On the wizard, the following triggers and buttons must be added or edited.

**next trigger**

```js
let $wizard = $(this);
let $page = $wizard.closest('.Page');
let fields = $wizard.find('.EditField:visible').find('input, select, textarea');
let rowCreateOptions = {};

async function checkDataOnFirstStep(stepno) {
	if (stepno === 0) {
		let hasValue = !!$.udb('SALES_ORDER').rows('current').cols('ID').val();

		if (!hasValue)
			await $.udb.checkData({quiet: true});
	}
}

async function createRowOrderLine(stepno) {
	if (stepno === 0 && !$.udb('ORDER_LINE').rowCount()) {
		await $.udb('ORDER_LINE').rowCreate(rowCreateOptions);
	}
}

async function beforeNext(stepno) {
	await checkDataOnFirstStep(stepno);
	await createRowOrderLine(stepno);
}

// Check all fields and get messages if necessary
fields.each((i, elem) => $(elem).valid() || true); 

if (fields.valid()) {
	beforeNext(wizardStep($wizard))
		.then(() => {
			$wizard
				.find('.wizard-body-step:not(.hide)')
				.addClass('hide')
				.next('.wizard-body-step')
				.removeClass('hide');
			;

			$wizard
				.trigger('setstepindicator')
				.trigger('showhide')
				.trigger('focus-first-field')
			;
		})
}
```

**Save and new button**

Add the 'Save and new' button to the wizard.

Take the button from the Controls tab of the catalog: ButtonControl/SalesAndNewButtonControl

Add this button to the wizard in: wizard/wizard/footer/wizard-footer-right-buttons. If you drop it there, it will position itself correctly

### Shortcomings

When you navigate from step 1 to step 2, you have entered data for ORDER. A CheckData() is performed and, after that, a ‘refreshdata' is triggered. But the 'refreshdata’ does not work. So data is only refreshed in the page after data has been saved.