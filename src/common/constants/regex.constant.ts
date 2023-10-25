/*
  Debe contener al menos una letra minúscula (a-z).
  Debe contener al menos una letra mayúscula (A-Z).
  Debe contener al menos un dígito (\d).
  Debe contener al menos un carácter especial entre '#', '$', '@', '!', '%', '&', '*', o '?'.
  La longitud de la cadena debe estar entre 6 y 30 caracteres.
*/
export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?]).+$/;
