const supertest = require('supertest')
const app = require('../app')
const config = require('../utils/config')

const api = supertest(app)

const responses = []

beforeAll(async () => {
    const r = await api.post('/testdata/nih')
    responses.push(r)
  })

describe('Checking for consistent backend data formatting', () => {

    test('results are returned in json format', async () => {
        expect(responses[0] === 200)
        expect(typeof(responses[0].body[0].project_title)).toBe("string")
    }, 100000)

    test('20 results are returned per query', async () => {
        
        expect(responses[0].body).toHaveLength(20)
    })

    test('Data is returned in a consistent JSON object format', async () => {
        expect(Object.keys(responses[0].body[0])).toHaveLength(34)
    })
})

describe('Checking the stability of the backend data', () => {
    
    test('Search Columns are Consistent', async () => {
        const response = await api.get('/testdata/nih')
        expect(response.body).toHaveLength(33)
    })
    
    test('1st response is consistent', async () => {
        expect(responses[0].body[0].project_title).toContain(
            'HUMAN EHRLICHIOSIS SURVEILLANCE AND EPIDEMIOLOGY'
        )
    })
    
    test('20th response is consistent', async () => {
        expect(responses[0].body[19].project_title).toContain(
            'Kinetic Studies of Transcription Elongation'
        )
    })
})

afterAll(async () => {
})