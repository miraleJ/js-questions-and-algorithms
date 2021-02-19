const toCamelCase = str => {
    return str.split(/[-_]/).map(word => word.charAt(0).toUpperCase().concat(word.slice(1))).join("");
    
    
}
