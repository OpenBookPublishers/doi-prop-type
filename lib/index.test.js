import doiPropType from './index';

describe('DOI Prop Type', () => {
    const propName = 'someproperty';
    const componentName = 'somecomponent';
    const validDoi = '10.11647/obp.0226';
    const invalidDoi = '10:11647/OBP.0226?%98.leon';
    const nonStringDoi = 10.001;

    describe('doiPropType', () => {
        it('should throw an error if prop value is not a string', () => {
            const props = {};
            props[propName] = nonStringDoi;
            expect(doiPropType(props, propName, componentName))
                .toEqual(new TypeError(`Invalid DOI Prop Value: ${nonStringDoi} for ${propName} in ${componentName}`));
        });

        it('should throw an error if prop value is not a valid DOI', () => {
            const props = {};
            props[propName] = invalidDoi;
            expect(doiPropType(props, propName, componentName))
                .toEqual(new TypeError(`Invalid DOI Prop Value: ${invalidDoi} for ${propName} in ${componentName}`));
        });

        it('should return null if prop value is a valid DOI', () => {
            const props = {};
            props[propName] = validDoi;
            expect(doiPropType(props, propName, componentName)).toBeNull();
        });

        it('should return null if prop is not defined', () => {
            const props = {};
            expect(doiPropType(props, propName, componentName)).toBeNull();
        });
    });

    describe('validateRequiredDoi', () => {
        it('should throw an error if prop value is not a valid DOI', () => {
            const props = {};
            props[propName] = invalidDoi;
            expect(doiPropType.isRequired(props, propName, componentName))
                .toEqual(new TypeError(`Invalid DOI Prop Value: ${invalidDoi} for ${propName} in ${componentName}`));
        });

        it('should throw an error if prop is not defined', () => {
            const props = {};
            expect(doiPropType.isRequired(props, propName, componentName))
                .toEqual(new TypeError(`Invalid DOI Prop Value: undefined for ${propName} in ${componentName}`));
        });
    });
});
