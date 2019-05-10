const palette = {
    darkest: '#000000',
    darker: '#292929',
    dark: '#585858',
    main: '#D5A021',
    lighter: '#EDE7D9',
    lightest: '#FFFFFF',
};

export const colors = {
    sliderBackground: palette.darker,
    sliderTrackBackground: palette.dark,
    sliderHandle: palette.main,
    sliderHandleTextColor: palette.darkest,

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