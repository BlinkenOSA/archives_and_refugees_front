const palette = {
    darkGrey: '#292929',
    lightGrey: '#585858',
    yellow: '#D5A021',
    lightYellow: '#EDE7D9',
    white: '#FFFFFF',
    black: '#000000'
};

export const colors = {
    sliderBackground: palette.darkGrey,
    sliderTrackBackground: palette.lightGrey,
    sliderHandle: palette.yellow,
    sliderHandleTextColor: palette.black,

    selectBackgroundColor: palette.darkGrey,
    selectBorderColor: palette.black,
    selectText: palette.white,
    selectTextHover: palette.black,
    selectMenuDropdownButtonHover: palette.yellow,
    selectMenuDropdownBackgroundColor: palette.black,
    selectMenuOptionBackgroundColor: palette.yellow
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
           backgroundColor: palette.black,
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