import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.COMMERCE_PUBLIC_KEY, true);

export default commerce;
