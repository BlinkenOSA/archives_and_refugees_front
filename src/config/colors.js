
/* Colors Original
export const palette = {
    darkest: '#000000',
    darker: '#292929',
    dark: '#585858',
    main: '#D5A021',
    lighter: '#EDE7D9',
    lightest: '#FFFFFF',
};
*/

export const palette = {
    darkest: '#000000',
    darker: '#292929',
    dark: '#585858',
    main: '#51657b',
    lighter: '#EDE7D9',
    lightest: '#FFFFFF',
};

/*
// Colors V1
export const palette = {
    dark: '#868996',
    darker: '#5C6672',
    darkest: '#293342',
    lighter: '#EDE7D9',
    lightest: '#FFFFFF',
    main: '#849E9B'
};

// Colors V2
export const palette = {
    dark: '#597488',
    darker: '#334354',
    darkest: '#2B3642',
    lighter: '#F2F8FF',
    lightest: '#FFFFFF',
    main: '#007AFF'
};

// Colors V3
export const palette = {
    dark: '#444B60',
    darker: '#33343A',
    darkest: '#060A16',
    lighter: '#c0c0c0',
    lightest: '#e2e2e2',
    main: '#839EE2'
};

// Colors V4
export const palette = {
    dark: '#637F7B',
    darker: '#707B89',
    darkest: '#2A3542',
    lighter: '#c0c0c0',
    lightest: '#F4FDFF',
    main: '#48647A'
};
*/

export const colors = {
    sliderBackground: palette.darker,
    sliderTrackBackground: palette.dark,
    sliderHandle: palette.main,
    sliderHandleTextColor: palette.lightest,

    selectBackgroundColor: palette.darker,
    selectBorderColor: palette.darkest,
    selectText: palette.lightest,
    selectTextHover: palette.darkest,
    selectMenuDropdownButtonHover: palette.main,
    selectMenuDropdownBackgroundColor: palette.darkest,
    selectMenuOptionBackgroundColor: palette.main
};

export const selectStyles = {
    container: (provided, state) => ({
        ...provided,
        border: '2px solid ' + colors.selectBorderColor,
        '&:focus': {
            borderColor: 'transparent',
        }
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        borderRadius: 0,
        backgroundColor: colors.selectBackgroundColor,
        boxShadow: 'none',
        '&:hover': {
            borderColor: 'transparent',
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        color: colors.selectText
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: colors.selectText
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: colors.selectText,
        '&:hover': {
            color: colors.selectMenuDropdownButtonHover
        }
    }),
    singleValue: (provided) => ({
        ...provided,
        color: colors.selectText,
    }),
    menu: (provided) => ({
        ...provided,
        color: colors.selectText,
        width: '100%',
        marginTop: 0,
        borderRadius: 0,
        backgroundColor: colors.selectMenuDropdownBackgroundColor,
        border: '2px solid ' + colors.selectBorderColor,
        '&::-webkit-scrollbar': {
           backgroundColor: palette.darkest,
           width: '16px'
        }
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? colors.selectMenuOptionBackgroundColor : 'transparent',
        '&:hover': {
            color: colors.selectTextHover,
            backgroundColor: colors.selectMenuOptionBackgroundColor
        },
    }),
    clearIndicator: (provided) => ({
        ...provided,
        color: colors.selectText,
        '&:hover': {
            color: colors.selectMenuDropdownButtonHover
        },
    })
};