import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { TeamService } from '../Team/team.service';

// TODO: Replace this with your own data model type
export interface Time {
  id: string;
  name: string;
  conference: string;
  division: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Time[] = [
  {id: '01', name: 'Claudia', conference: 'test', division: 'North'},
  {id: '02', name: 'Andre', conference: 'meu Deus', division: 'South'},
  {id: '03', name: 'Artur', conference: 'garage', division: 'North'},
  {id: '04', name: 'Larissa', conference: 'Angular', division: 'West'},
  {id: '05', name: 'Etelmar', conference: 'Apple', division: 'East'}
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<Time> {
  data: Time[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(/* teamServ: TeamService */) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Time[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Time[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Time[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'conference': return compare(a.conference, b.conference, isAsc);
        case 'division': return compare(a.division, b.division, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
