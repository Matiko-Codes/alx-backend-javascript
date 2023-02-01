/// <reference path="./interface.ts" />
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const obj: RowElement = {firstName: "Guillaume", lastName: "Salva"};
const newRowID: RowID = CRUD.insertRow(obj);
console.log(`Insert row ${JSON.stringify(obj)}`);

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);