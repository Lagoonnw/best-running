import React, { Fragment, useState }                            from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { workoutTypes, sortDateTypes, sortDistanceTypes }       from "../../constants/constants";

interface Props {
  onChange({type, value}: { [k: string]: string | null }): void,
  children: any
}

interface Filter {
  types: string[],
  open: boolean,
  toggle: React.KeyboardEventHandler<any> | React.MouseEventHandler<any>
}

export const Filter = (props: Props) => {
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [distanceDropdownOpen, setDistanceDropdownOpen] = useState(false);
  const onFilterItemClick = (type: string, value: string | null) =>
    props.onChange({type, value});
  const filtersMap: { [k: string]: Filter } = {
    type    : {
      types : workoutTypes,
      open  : typeDropdownOpen,
      toggle: () => setTypeDropdownOpen(prevState => !prevState)
    },
    date    : {
      types : sortDateTypes,
      open  : dateDropdownOpen,
      toggle: () => setDateDropdownOpen(prevState => !prevState)
    },
    distance: {
      types : sortDistanceTypes,
      open  : distanceDropdownOpen,
      toggle: () => setDistanceDropdownOpen(prevState => !prevState)
    }
  }
  
  const renderTypeFilter = (type: string) => (
    <Dropdown isOpen={filtersMap[type].open} toggle={filtersMap[type].toggle}>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        {filtersMap[type].types.map((t) => (
          <DropdownItem
            onClick={() => onFilterItemClick(type, t)}
            key={t}
          >{t}</DropdownItem>
        ))}
        <DropdownItem
          key={'all'}
          onClick={() => onFilterItemClick(type, null)}>All</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
  
  
  return (
    <Fragment>
      <tr>
        <th>#</th>
        <th>
          {renderTypeFilter('type')}
        </th>
        <th>{renderTypeFilter('distance')}</th>
        <th>{renderTypeFilter('date')}</th>
        <th>{props.children}</th>
      </tr>
    </Fragment>
  )
  
}


