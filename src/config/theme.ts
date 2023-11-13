'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
    colors: {
        primary: ['', '', '', '', '', '', '', '#0B94A2', '#057983', ''],
        success: ['', '', '', '', '', '', '', '#47D78E', '#38BE7B', ''],
        info: ['', '', '', '', '', '', '', '#09B8FF', '#00A1E4', ''],
        warning: ['', '', '', '', '', '', '', '#D9D02F', '#C0B820', ''],
        danger: ['', '', '', '', '', '', '', '#F01879', '#D60867', ''],
    },
    primaryColor: 'primary',
    fontFamily: 'Archivo',
    primaryShade: 7,
});
