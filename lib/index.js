const isDoi = (value) => {
    return /^10.\d{4,9}\/[-._\;\(\)\/:a-zA-Z0-9]+$/g.test(value);
}

const requiredDoiPropType = (props, propName, componentName) => {
    const value = props[propName];

    if (value == null || typeof value !== 'string' || !isDoi(value)) {
        return new TypeError(`Invalid DOI Prop Value: ${value} for ${propName} in ${componentName}`);
    }

    return null;
};

const doiPropType = (props, propName, componentName) => {
    if (props[propName] == null) {
        return null;
    }

    return requiredDoiPropType(props, propName, componentName);
};

doiPropType.isRequired = requiredDoiPropType;

export default doiPropType;