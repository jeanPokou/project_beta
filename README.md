# project_beta

### Installation


#### You need to run npm install and bower install :

```sh
$ npm i 
$ bower i
```
 * app/config.require.js configuration  load the required module
 * app/startup import modules 
    * inside startup I am invoking ForerunnerDB
    * ```javascript
        // creating the Forerunner Data Base
        var fdb = new ForerunnerDB();
        var db = fdb.db("myDatabaseName");
        var itemCollection = db.collection("item");
        ```
        
 ### you can check the gulpfile.js for more info but here are the main tasks
 * use gulp to serve for dev

```sh
$ gulp serve:src
```
*  use gulp to serve for dist ( not working)
```sh
$ gulp serve:dist
```


