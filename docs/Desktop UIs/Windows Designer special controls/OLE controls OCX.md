# OLE controls (OCX)

This help topic explains the use of OCX technology in the USoft Product Set from the user's viewpoint. You need to be familiar with the way OLE containers are used, and know what OLE Controls are. Working experience with OLE Controls (for example via Microsoft Visual Basic 4.0) is recommended.

### Assigning an OCX

Before you can assign an OLE Control to the container you need to have controls registered on your system. Read the section about registering controls to do this.

To assign an OLE control to your container:

1. Start the Windows Designer.

2. Open the info window in which you defined your OLE container.

3. Open a Property Inspector on the OLE Column object.

4. Edit the Object Name property (on the General tab) to select an OLE Control.

5. If you want to set properties of the OLE Control itself, use the Object Navigator to select the "data" child of the OLE Column.

6. Save your info window and you are ready.

## Inheritance

When you inspect the properties of an OLE Control, the Property Inspector shows you which properties belong to the OLE Control and which belong to the OLE Container in its third column of the property list. Values from the OLE Control are marked by the value "OCX".

## Bindable property

Most OLE Controls have one special kind of property: the Default Bindable property. The OLE Container will request the OLE Control for this property and use it as the attribute for your table. For example, if you have a Date field in your table, you can assign a Microsoft Calendar Control to this field, which couples the selected date to the Date field in the table.

## Control events

Internally the OLE Container handles several events that are raised by the OLE Control. Although the OLE Container already has the capability to work with any event from the OLE Control, the user cannot write actions for those events. In a later version these control events will be Behavior properties in the Property Inspector.

## Ambient properties

The OLE Container internally supports ambient properties. These properties are mapped to the regular properties you know from other objects in your info window, such as the Background Color property. Most OLE Controls do not take care of these ambient properties and present their own version, such as the Background property.

## SetProperty() action

You can set properties for an OLE Control at design-time by using the Property Inspector. All the properties provided by the control (those listed in the Property Inspector) can also be set at runtime by using the SetProperty() action. The action takes two parameters. The first parameter is the name of the property as it appears in the Property Inspector, and the second is the value to give to that property. The possible values can be seen with the Property Inspector and depend on the OLE control.

## Registering OCX controls

Several products automatically install OLE Controls on your system, for example Microsoft Visual Basic 4.0 and Microsoft Office. Microsoft has some tools to register OLE Controls on your system.

OLE Controls are registered on your system in two ways:

- The control is delivered with a registration database file (for example mycontrol.reg). To register these type of controls you need to import this file into your registry. You can do this by starting the registry (REGEDIT.EXE) and importing the file, or by double-clicking the file in the explorer.
- The control has self-registration capabilities. These controls have to be registered by using utilities supplied by Microsoft. An example of such a utility is REGSVR32.EXE (part of the Win32 SDK, Visual C++ 4.0 and Visual Basic 4.0). You can use a DOS box and type "regsvr32 mycontrol.ocx" to register the control.