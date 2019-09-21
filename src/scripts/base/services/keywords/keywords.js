import keywords from '@data/keywords';

const _public = {};

_public.get = type => {
  return type ?
    keywords.filter(item => item.type === type) :
    keywords;
};

export default _public;
