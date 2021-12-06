# DOI Prop Type

[![Build Status](https://img.shields.io/github/workflow/status/OpenBookPublishers/doi-prop-type/build-test-and-lint/master)](https://www.npmjs.com/package/doi-prop-type)
[![npm](https://img.shields.io/npm/v/doi-prop-type.svg)](https://www.npmjs.com/package/doi-prop-type)
![GitHub](https://img.shields.io/github/license/OpenBookPublishers/doi-prop-type)

This package is used to validate if a React Prop value is a valid DOI, e.g. `10.11647/obp.0229`. To do so we compare the input against this regex: `/^10.\d{4,9}\/[-._\;\(\)\/:a-zA-Z0-9]+$/g`.

The [`prop-types` package](https://www.npmjs.com/package/prop-types) does not support a DOI prop type, therefore you can use this package to validate them, instead of using the permissive `PropType.string`.

## Installation
`npm install --save doi-prop-type`

## Example Usage
```javascript
import React from 'react';
import doiPropType from 'doi-prop-type';

// Create a generic component
const Doi = props => ( <a href={`https://doi.org/${props.doi}`}>{props.doi}</a> );

Doi.propTypes = {
  link: doiPropType.isRequired, // can also specify doiPropType if it is not required
};
```
