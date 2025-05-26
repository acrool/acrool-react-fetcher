import {removeSlashes} from './index';



describe('RemoveSlashes', () => {

    test('Fix double slashes in URLs', () => {

        expect(removeSlashes('/static//images/logo.png')).toBe('/static/images/logo.png');
        expect(removeSlashes('/no/double/slash')).toBe('/no/double/slash');
        expect(removeSlashes('http://example.com//path//to//resource')).toBe('http://example.com/path/to/resource');
        expect(removeSlashes('https://example.com//another//path2')).toBe('https://example.com/another/path2');
        expect(removeSlashes('http://test.com//double/slash')).toBe('http://test.com/double/slash');
    });


});
