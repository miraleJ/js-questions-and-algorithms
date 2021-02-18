const yearToCentury = year => {
    const cen = year / 100;
    const floorCen =  Math.floor(cen);
    return cen === floorCen ? cen : floorCen + 1;
} 
