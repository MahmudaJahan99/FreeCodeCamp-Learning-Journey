function maskEmail(email) {
  let asterisk = "*";
  let atIndex = email.indexOf("@");
  let userName = email.slice(0, atIndex);
  let userNameFirstLetter = userName.slice(0, 1);
  let userNameLastLetter = userName.slice(-1);
  let userNameLength = userName.length - 2;
  let maskedUsername = asterisk.repeat(userNameLength);
  let domainName = email.slice(atIndex);

  let maskedMail = `${userNameFirstLetter}${maskedUsername}${userNameLastLetter}${domainName}`;

  return maskedMail;
}
