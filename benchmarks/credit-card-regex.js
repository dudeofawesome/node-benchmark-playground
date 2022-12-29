const credit_card_num = '1234567890123456';

module.exports.single_regex = function () {
  credit_card_num.replace(/(?<=\b\d{6})\d{3,9}(?=\d{4}\b)/g, (match) => {
    return '*'.repeat(match.length);
  });
};

module.exports.double_regex = function () {
  credit_card_num.replace(/\b\d{13,19}\b/g, (match) => {
    return match.replace(/(?<=.{6}).(?=.{4})/g, '*');
  });
};

const outer_regex = /\b\d{13,19}\b/g;
const inner_regex = /(?<=.{6}).(?=.{4})/g;
module.exports.double_regex_const = function () {
  credit_card_num.replace(outer_regex, (match) => {
    return match.replace(inner_regex, '*');
  });
};
