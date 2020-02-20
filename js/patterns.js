const patterns = {
  firstname: {
    pattern: /^[A-Za-z]{3,12}$/,
    valid: false
  },
  lastname: {
    pattern: /^[A-Za-z]{3,12}$/,
    valid: false
  },
  email: {
    pattern: /^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    valid: false
  },
  password: {
    pattern: /^[\w@-]{8,20}$/,
    valid: false
  },
  telephone: {
    pattern: /^[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}$/,
    valid: false
  },
  bio: {
    pattern: /^[a-zA-Z \.,;\?]{10,100}$/,
    valid: false
  }
}
