import React from 'react';
import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
  Icon, makeStyles, useTheme,
} from 'react-native-elements';

interface ButtonProps extends RNEButtonProps {
  variant?: 'primary' | 'secondary';
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  iconType?: string;
}

const Button: React.FC<ButtonProps> = props => {
  const { theme } = useTheme();
  const {
    variant = 'primary',
    iconColor,
    buttonStyle,
    titleStyle,
    containerStyle,
    iconName,
    iconSize,
    iconType,
    type,
    ...otherProps
  } = props;
  const styles = useStyles(props);

  const icon = iconName ? (
    <Icon
      name={iconName}
      color={iconColor || theme.colors.lightgrey}
      size={iconSize || 18}
      style={styles.icon}
      type={iconType}
    />
  ) : null;

  return (
    <RNEButton
      type={type}
      containerStyle={[
        variant === 'primary'
          ? styles.primaryContainer
          : styles.secondaryContainer,
        containerStyle,
      ]}
      buttonStyle={[
        variant === 'primary' ? styles.primary : styles.secondary,
        buttonStyle,
        type === 'outline' &&
          variant === 'secondary' &&
          styles.secondaryOutline,
      ]}
      titleStyle={[
        variant === 'primary' ? styles.primaryTitle : styles.secondaryTitle,
        titleStyle,
      ]}
      icon={icon}
      {...otherProps}
    />
  );
};

const useStyles = makeStyles((theme, props: ButtonProps) => ({
  primaryContainer: {
    borderRadius: theme.borderRadii.m,
  },
  secondaryContainer: {
    borderRadius: theme.borderRadii.xl,
  },
  primary: {
    borderRadius: theme.borderRadii.m,
    paddingVertical: theme.spacing.s + 6,
  },
  secondary: {
    backgroundColor:
      props.type === 'outline' || props.type === 'clear'
        ? null
        : theme.colors.secondary,
    borderRadius: theme.borderRadii.xl,
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
  },
  primaryTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
  },
  secondaryTitle: {
    // color: theme.colors.buttonText,
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
  },
  secondaryOutline: {
    borderColor: '#116a4f',
    borderWidth: 1,
  },
  icon: {
    marginHorizontal: 3,
  },
}));

export default Button;
