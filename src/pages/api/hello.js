// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handleGet(req, res) {
  if (req.method === "GET") {
    danoEsteticoPerezGarcia(req, res)
  } else {
    res.status(405).send()
  }
}

const danoEsteticoPerezGarcia = (req, res) => {
  res.status(200).json(
    [
      {
        "classificacaoPerezGarcia": "1. Ligeira",
        "caracteristicas": " Pesquenas cicatrizes planas em zonas pouco visíveis.&#10;  Pesquenas cicatrizes faciais que passem desapercebidas para a maioria dos observadores.&#10;  Pequenas cicatrizes hipertróficas moderadamente ou hiperpigmentadas em áreas normalmente não é visível.&#10;  Discreta afetação de pigmentação, pêlos ou cabelo.&#10;  Sequelas queimaduras pouco importantes em áreas geralmente não visíveis."
      },
      {
        "classificacaoPerezGarcia": "2. Moderado",
        "caracteristicas": " Cicatrizes de certo tamanho associada discromias, proeminências, etc em áreas pouco visíveis.&#10;  Cicatrizes faciais visíveis associadas a pequenos defeitos de pigmentação, proeminências, retrações.&#10;  Envolvimento moderado de pigmentação, pêlos ou cabelos.&#10;  Sequelas de queimaduras mediamente importantes em áreas normalmente visível.&#10;  Claudicação discreta.&#10;  Discretas assimetrias faciais, discretas assimetrias de corpo.&#10;  Alopecia focal moderadamente significativa.&#10;  Perda da falange distal de um dedo."
      },
      {
        "classificacaoPerezGarcia": "3. Médio",
        "caracteristicas": " Cicatrizes hipertróficas, proeminentes, escavadas, discrômicas afetando o rosto.&#10;  Alopécia regional significativa.&#10;  Importantes efeitos de queimaduras em áreas em visível, especialmente na face.&#10;  Perda de duas ou três falanges dos dedos da mão.&#10;  Claudificação significativa.&#10;  Mastectomia.&#10;  Cicatrizes queloideanas traumáticas ou cirúrgicas, deformandose especialmente as mulheres, embora em gerlmente não são áreas visíveis.&#10;  Alterações bucais importantes devido a perda de partes de próteses.&#10;  Áreas de enxertos epidérmicos.&#10;  Ulcerações crônicas que afetam superfícies significativas.&#10;  Paralisia de membros ou sequelas com vícios posturais de membros, pescoço e tronco.&#10;  Assimetrias corporais importantes."
      },
      {
        "classificacaoPerezGarcia": "4. Importante",
        "caracteristicas": " Ampla perda de tecido facial com quelóide, retração ou ulceração.&#10;  Perda do olho independente que o efeito pode ser melhorado com as próteses.&#10;  Alopécia de grandes áreas ou total.&#10;  Perda de um membro.&#10;  Claudicação grande com corpo de inclinação.&#10;  Grande cifose, escolioses ou lordoses e suas associações.&#10;  Grandes cicatrizes patológicas que afetam uma grande superfície corporal especialmente em áreas visíveis.&#10;  Alterações bucais importantes devido a perda de partes de próteses.&#10;  Áreas de enxertos epidérmicos.&#10;  Importantes assimetrias faciais.&#10;  Grande defeitos de pigmentação em áreas especialmente visíveis e associado a cicatrizes, retrações ou ulceras."
      },
      {
        "classificacaoPerezGarcia": "5. Muito Importante",
        "caracteristicas": " Grandes queimaduras com cicatrizes retráteis, discromias e perda de substância.&#10;  Duas ou mais amputações do membro.&#10;  Alopecia Total com cicatrizes em couro cabeludo.&#10;  Mastectomia bilateral, associada com cicatrizes cirúrgicas importantes.&#10;  Grande vícios posturais de membros superiores e inferiores.&#10;  Grandes deformidades faciais que podem até ser incluídas como monstruosidades.&#10; Múltiplas sequelas de queimaduras de 2º e 3º grau que podem afetar a maior parte da superfície do corpo, com cicatrizes retráteis, ulcerações, discromias."
      },
      {
        "classificacaoPerezGarcia": "6. Considerável",
        "caracteristicas": " Monstruosidades faciais.&#10;  Monstruosidades corporais.&#10;  Associação de várias sequelas importantes.&#10;  Em geral todos aqueles que ultrapassam os conceitos de muito importantes."
      }
    ]
    
  )
}
