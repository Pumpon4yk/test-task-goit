import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Select = styled(Dropdown)`
  width: 200px;
  margin: 0 auto;

  .Dropdown-control {
    border-radius: 10px;
    background-color: #fff05;
    padding: 10px 52px 10px 10px;
    color: #5736a3;

    :hover {
      background-color: #fdda0d;
    }
  }

  .Dropdown-arrow {
    top: 16px;
  }
  .Dropdown-menu {
    border-radius: 10px;
  }

  .Dropdown-option {
    color: #5736a3;

    :hover {
      background-color: #ebd8ff;
      color: #5736a3;
    }
  }

  .Dropdown-option.is-selected {
    background-color: #ebd8ff;
    color: #5736a3;
  }
`
