import { useContext } from 'react';

import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
import { Container, Input } from './styles';

export type SwitcherProps = {
  toggleTheme: () => void;
};

export const Switcher = ({ toggleTheme }: SwitcherProps) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.primaryColor}
        onColor={colors.primaryColor}
      />
      {title === 'dark'
        ? (
          <Input
            type="image"
            alt="moon"
            src="https://image.flaticon.com/icons/png/512/1152/1152393.png"
            onClick={toggleTheme} />)
        : (
          <Input
            type="image"
            alt="sun"
            src="https://image.flaticon.com/icons/png/512/2907/2907217.png"
            onClick={toggleTheme} />)}
    </Container>
  );
};
