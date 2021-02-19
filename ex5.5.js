const nameInitials = name => name.split(' ').map(word => word.charAt(0).toUpperCase().concat('.')).join('').slice(0,-1);
