Se creo cada modelo en el orden presentado a continuacion. Luego se agrego en cada archivo de migraciones las columnas correspondientes a los foreignIds, y se agregaron las respectivas asociaciones en cada archivo de modelo.
Tambien se eliminaron las timestamps de cada tabla, exeptuando a User, Order y Detail. Finalmente se ejecuto la migracion de cada archivo, uno por uno en el orden presentado:

sequelize model:generate --name Color --attributes color:string

sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Size --attributes type:string

sequelize model:generate --name Gender --attributes type:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name State --attributes description:string

sequelize model:generate --name Shipping --attributes name:string,street:string,dni:integer,number:integer,price:decimal,phoneNumber:integer

sequelize model:generate --name Adress --attributes street:string,number:integer

sequelize model:generate --name Avatar --attributes name:string

sequelize model:generate --name Role --attributes name:string

sequelize model:generate --name User --attributes firstName:string,lastName:string,username:string,email:string,password:string

sequelize model:generate --name Product --attributes name:string,price:decimal,stockMin:integer,stockMax:integer,discount:integer,description:text,offer:integer,season:integer

sequelize model:generate --name Image --attributes name:string

sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,shippingId:integer,stateId:integer,paymentId:integer,userId:integer

sequelize model:generate --name Detail --attributes quantity:decimal,subtotal:decimal,orderId:integer,productId:integer


