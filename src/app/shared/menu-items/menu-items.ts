import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  // icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
     
      },
  {
  state: 'manage-staff',
  short_label: 'C',
  name: 'Manage Staff',
  type: 'link',

},
{
  state: 'manage-system-users',
  short_label: 'C',
  name: 'Manage System Users',
  type: 'link',

},
{
  state: 'manage-buldings',
  short_label: 'C',
  name: 'Manage Buildings',
  type: 'link',

},




]
  },
  {
    label: 'Manage Visits',
    main: [
      {
        state: 'check-in-visitors',
        short_label: 'C',
        name: 'Check In Visitors',
        type: 'link',
    },
    {
      state: 'checked-in-visitors',
      short_label: 'C',
      name: 'Checked In Visitors',
      type: 'link',
    
    },
    {
      state: 'checked-out-visitors',
      short_label: 'C',
      name: 'Visit History',
      type: 'link',
    
    },
    {
      state: 'overdue-checked-in',
      short_label: 'C',
      name: 'Overdue Checked In',
      type: 'link',
    
    },
    ]
    

  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
