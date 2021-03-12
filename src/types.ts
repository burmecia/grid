import { Column, HeaderRendererProps } from 'react-data-grid';

export interface Dictionary<T> {
  [Key: string]: T;
}

export type GridProps = {
  width?: string | number;
  height?: string | number;
  defaultColumnWidth?: string | number;
  containerClass?: string;
  gridClass?: string;
  rowClass?: ((row: Dictionary<any>) => string | undefined) | undefined;
};

export type SupaRelationship = {
  readonly id: number;
  readonly name: string;
  readonly sourceSchema: string;
  readonly sourceTableName: string;
  readonly sourceColumnName: string;
  readonly targetTableSchema: string;
  readonly targetTableName: string;
  readonly targetColumnName: string;
};

export interface SupaBase {
  readonly id: string | number;
  readonly comment: string | null;
  readonly name: string;
  readonly schema: string;
}

export interface SupaColumn extends SupaBase {
  readonly defaultValue: string | null;
  readonly dataType: string;
  readonly enums: string[];
  readonly format: string;
  readonly isIdentity: boolean;
  readonly isGeneratable: boolean;
  readonly isNullable: boolean;
  readonly isUpdatable: boolean;
  readonly tableId: number;
  position: number;
}

export interface SupaTable extends SupaBase {
  readonly columns: SupaColumn[];
  readonly relationships: SupaRelationship[];
  totalRows: number;
}

export interface Sort {
  columnId: string | number;
  order: string;
}

export interface Filter {
  clause: string;
  columnId: string | number;
  condition: string;
  filterText: string;
}

export interface SavedState {
  filters: Filter[];
  gridColumns: Column<any, any>[];
  sorts: Sort[];
}

export interface DragItem {
  index: number;
  id: string;
  type: string;
}

export interface ColumnHeaderProps<R> extends HeaderRendererProps<R> {}
