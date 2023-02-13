const {publicSerivce, publicServicebyID} = require('./publicService');

jest.mock('./publicService');

describe('Cat Service test', () => {
    test('As a user I should return 10 cat facts ', async () => {
        const result =  await publicSerivce();
        expect(result.data).toHaveLength(10);
        expect(result.data.length[38]).toEqual(38);
        expect(result.data.fact).toEqual("A group of cats is called a “clowder.”");
    });


test('As a user I should return a cat fact by Id', async () => {
   // const result = await publicServicebyID();
    expect(result.data.length).toEqual(38);
    expect(result.data.fact).toEqual("A group of cats is called a “clowder.”");
    });
});