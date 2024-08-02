
# Details

```http
  POST/Myform
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | Required.String/Numeric |
| `lastname` | `string`| Required.String/Numeric |
| `emailaddress` | `string` | Reqired.Valid Email address |
| `signinthrough` | `string`| Required.String |
| `timezone`|`string`|Required.String |
|`country`|`string`|Required.String |

#### Method

```javascript
  POST:-user
```

#### Headers
Yet to be updated

#### A Few things to remember

#### Validation

#### Input

```json
  {
  "firstname" : "vishali",
  "lastname" : "valliyappan",
  "emailaddress" : "vishlai.v@atomedgesoft.com",
  "signinthrough" : "Google",
  "timezone": "Asia/Calcuta",
  "country" : "india"
}
``` 
### Flow chart


![Post](../img/validation.png)

