import { rest } from "msw";

export const handlers = [
  rest.get("https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/", (req, res, ctx) => {
    const idAuthor = req.url.searchParams.get('idAuthor')
    return res(
      ctx.json([
        {
          "id": 111,
          "name": "Pokemon1_Test",
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
          "attack": 11,
          "defense": 22,
          "hp": 33,
          "type": "Electric",
          "idAuthor": idAuthor
        },
        {
          "id": 222,
          "name": "Pokemon2_Test",
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
          "attack": 44,
          "defense": 55,
          "hp": 66,
          "type": "Normal",
          "idAuthor": idAuthor
        },
        {
          "id": 333,
          "name": "Pokemon2_Test",
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
          "attack": 77,
          "defense": 88,
          "hp": 99,
          "type": "Normal",
          "idAuthor": 4344
        }
      ])
    );
  }),
];