import { RowID, RowElement } from './interface';

declare function createRow(row: RowElement): RowID;
declare function readRow(id: RowID): RowElement | undefined;
declare function updateRow(id: RowID, update: Partial<RowElement>): boolean;
declare function deleteRow(id: RowID): boolean;

declare module './crud' {
  export { createRow, readRow, updateRow, deleteRow };
}