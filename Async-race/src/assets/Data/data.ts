// 29 cars
const carNames: string[] = ['Honda', 'Mercedes', 'BMW', 'Opel', 'Peugeot', 'Citroen', 'Toyota', 'Mazda', 'Audi', 'Volkswagen', 'Lada', 'Geely',
  'Saab', 'Ferrari', 'Bentley', 'Acura', 'Renault', 'Nissan', 'Volvo', 'Fiat', 'Ford', 'Infinity', 'Lexus', 'Kia',
  'Hummer', 'Mitsubishi', 'Seat', 'Rover', 'Tesla'];

const carsModels: string [][] = [
  ['FR-V', 'Accord', 'Civic', 'CR-V', 'CR-X', 'CR-Z', 'Fit', 'HR-V', 'Jazz', 'Logo'],
  ['W245', 'W246', 'W247', 'W202', 'W205', 'X213', 'W176', 'W177', 'W213', 'EQS', 'X222'],
  ['i3', 'i4', 'i8', 'IX', 'M2', 'M3', 'M4', 'M5', 'X1', 'X2', 'X3', 'X4', 'X5'],
  ['Astra', 'Calibra', 'Combo', 'Corsa', 'Insignia', 'Karl', 'Mokka', 'Omega', 'Record', 'Zafira'],
  ['1007', '106', '107', '2008', '3008', '4007', '4008', '5008', '607', '605', '508'],
  ['AX', 'BX', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C8', 'DS3'],
  ['Auris', 'Avalon', 'Avensis', 'Augo', 'C-HR', 'Camry', 'Carina', 'Celica', 'Corolla', 'iQ'],
  ['2', '3', '5', '6', '121', '323', '626', '929', 'CX-3', 'CX-5'],
  ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A8', 'Q3', 'Q5', 'Q7'],
  ['Polo', 'Bora', 'Caddy', 'e-Bora', 'e-Golf', 'Golf', 'Fox', 'Jetta', 'Lypo', 'Passat'],
  ['Vesta', 'Priora', 'XRAY', 'Granta', 'Kalina', 'Largus', 'Niva Travel', '2114', '2115', '2111'],
  ['Atlas', 'Coolray', 'Emgrand', 'MK', 'Tugella', 'SC7', 'Okavango', 'GS', 'CK', 'Atlas Pro'],
  ['9-3', '9-5', '9-7X', '900', '9000'],
  ['360', 'SF1000', 'F8 Tributo', 'SF90', 'Monza SP', 'SF71H', '488 Pista Spider', 'SF70-H', 'SF16-H', 'SF15-T'],
  ['AZURE', 'FLYING SPUR', 'CONTINENTAL GT', 'MULSANNE', 'CONTINENTAL GT SPEED', 'BENTAYGA', 'ARNAGET', 'CONTINENTAL FLYING SPUR', 'CONTINENTAL GT V8S', 'CONTINENTAL GTC'],
  ['CL', 'ILX', 'MDX', 'RDX', 'RL', 'RSX', 'TL', 'TLX', 'TSX', 'ZDX'],
  ['11', '19', 'Logan', 'Clio', 'Duster', 'Espace', 'Dokker', 'Capture', 'Laguna', 'Megane'],
  ['250SX', '350Z', '370Z', 'Almera', 'Cube', 'GT-R', 'Juke', 'Leaf', 'Maxima', 'Micra'],
  ['440', '460', '480', '740', '760', '940', '960', 'C40', 'C70', 'S40'],
  ['Punto', '500', '500L', '500X', '500E', 'Bravo', 'Brava', 'Croma', 'Idea', 'Marea'],
  ['B-MAX', 'Focus', 'S-MAX', 'Mustang', 'Mondeo', 'Scorpio', 'Sierra', 'Puma', 'Ka', 'Kuga'],
  ['EX', 'FX', 'G', 'JX', 'Q30', 'Q45', 'Q50', 'Q60', 'Q70', 'QX70'],
  ['CT', 'ES', 'GX', 'IC', 'LC', 'NX', 'RC', 'RX', 'SC', 'UX'],
  ['K5', 'KX3', 'K900', 'Niro', 'Optima', 'Opirus', 'Picanto', 'Joice', 'Forte', 'Carens'],
  ['H1', 'H1', 'H3'],
  ['ASX', 'Colt', 'Eclipse', 'Eterna', 'Galant', 'Grandis', 'Lancer', 'Mirage', 'Montero', 'Sigma'],
  ['Alhambra', 'Altea', 'Arona', 'Arosa', 'Ateca', 'Ibiza', 'Leon', 'Mii', 'Tarraco', 'Toledo'],
  ['100', '200', '25', '400', '45', '600', '75', '800', 'Streetwise', '620'],
  ['Model 3', 'Model S', 'Model Y', 'Model X', 'Cybertruck', 'Roadster'],
];

function getRandomNumber(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

export default function getRandomCarAndModel(): string {
  const randomIndex = getRandomNumber(0, 28);
  const randomIndex2 = getRandomNumber(0, carsModels[randomIndex].length - 1);
  return `${carNames[randomIndex]} ${carsModels[randomIndex][randomIndex2]}`;
}
