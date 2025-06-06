---
id: Component_parameters
---

# Component parameters

When you use RDMI, you are likely to pass parameters to the method and/or receive parameters back from the method. For each method call you need to determine:

- The number of parameters you need.
- For each parameter, the mode of the parameter (In, Out, Return, or InList).
- For each parameter, the data type of the parameter.

## How parameters are passed to and from components

How parameters are passed to and from components depends on the sequence number and kind of parameter, and on the SQL syntax that the INVOKE clause is used in. The following example illustrates this:

```sql
UPDATE  MyTab1
SET     (col1, col2) =
(
    INVOKE    MyComponent.MyMethod WITH
    SELECT    colX, colY, colZ    
    FROM      MyTab2
)

```

The following table shows the parameters defined for "MyMethod" and how they are used:

|**Par Seqno**|**Par Name**|**Par Kind**|** **   |
|--------|--------|--------|--------|
|1       |par1    |In      |Will be passed colX|
|2       |par2    |Out     |Will go to col1|
|3       |par3    |Return  |Will go to col2|
|4       |par4    |In      |Will be passed colY|
|5       |par5    |In      |Will be passed colZ|



This example shows that the Return parameter is handled as if it were an Out parameter.

> [!NOTE]
> This example shows the rules underpinning parameter use. It is usually a good idea to define In parameters before Out parameters, and Out parameters before the Return parameter.

## Parameter datatypes

The following datatypes are supported for method parameters:

- String
- Boolean
- Date
- Double
- Long Integer
- Variable

Use Long Integer for integer numeric values. Use Double for non-integer numeric values.

Use Variable only in combination with the InList parameter mode.

The following rules are applied for boolean values used by components:

- Numeric input values other than 0 are converted to boolean True.
- 0 input value is converted to boolean False.
- 'N' input value is converted to boolean False.
- 'Y' input value is converted to boolean True.
- For any other input value an error message is generated.

If you use COM, the parameters that can have a NULL value must be defined as VARIANT in the source code. This is, for example, the case with the parameters of the QueryExe method of a table component.

## Parameter modes

Four modes of RDMI parameters are supported: In, Out, Return, and InList.

- Define In parameters for all parameters that are passed from the USoft application to the external component.
- Define a Return parameter for the value that is passed back from the component to USoft as a standard procedure. This value could be used to verify that an invocation has been successful, or it could be data that is used again by the USoft application, for example when the component is called to perform a complex calculation.
- Define Out parameters for all parameters passed back from the component to the USoft application, other than the Return parameter.
- Define one InList parameter for all non-mandatory (variable) parameters of a method.

You can define one InList parameter for all non-mandatory (variable) parameters of a method.

For this InList parameter, define the Variable data type. There can only be one parameter with InList Mode, and this parameter must be the last one in the in-going parameter list.

For COM components, the Variable data type is translated to VARIANT. For Java components, the Variable data type is an array of Objects.

*Example:*

Suppose a CALCULATE component has a SUM method that adds up all parameters. The minimum number of parameters is two, and there is no maximum number. The statement:

```
SELECT   Calculate.Sum( 2, 3 )
```

must return: 5, and the statement:

```
SELECT   Calculate.Sum( 2, 3, 7, 4 )
```

must return: 16.

For the SUM method, define parameters:

|**Seqno**|**Name**|**Mode**|**Data Type**|
|--------|--------|--------|--------|
|1       |par1    |In      |Long Integer|
|2       |par2    |In      |Long Integer|
|3       |Result  |Return  |Long Integer|
|4       |variables|InList  |Variable|