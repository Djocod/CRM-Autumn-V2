import sql from "./dbCRM.js";
import fs from "fs/promises";

// Import Users
async function importData() {
  const dataUsers = await fs.readFile("./jsonFile/users.json", "utf-8");
  const users = JSON.parse(dataUsers);

  for (const user of users) {
    const gender = user.gender;
    const title = user.name?.title ?? null;
    const first_name = user.name?.first ?? null;
    const last_name = user.name?.last ?? null;
    const email = user.email;
    const phone = user.phone ?? null;
    const cell = user.cell ?? null;
    const nat = user.nat ?? null;
    const street_number = user.location?.street?.number ?? null;
    const street_name = user.location?.street?.name ?? null;
    const city = user.location?.city ?? null;
    const state = user.location?.state ?? null;
    const country = user.location?.country ?? null;
    const postcode = user.location?.postcode ?? null;
    const latitude = user.location.coordinates?.latitude ?? null;
    const longitude = user.location.coordinates?.longitude ?? null;
    const username = user.login?.username ?? null;
    const password = user.login?.password ?? null;
    const salt = user.login?.salt ?? null;
    const md5 = user.login?.md5 ?? null;
    const pictureLarge = user.picture?.large ?? null;
    const pictureMedium = user.picture?.medium ?? null;
    const picturethumbnail = user.picture?.thumbnail ?? null;
    const birth_date = user.dob?.date ?? null;
    const birth_age = user.dob?.age ?? null;

    await sql`
      INSERT INTO users (gender, title, first_name, last_name, email, phone, cell, nat, street_number, street_name, city, state, country, postcode, latitude, longitude, username, password,salt, md5, picture_large, picture_medium, picture_thumbnail, birth_date, birth_age)
      VALUES (${gender},${title},${first_name},${last_name},${email},${phone},${cell},${nat},${street_number},${street_name},${city},${state},${country},${postcode},${latitude},${longitude},${username},${password},${salt},${md5},${pictureLarge},${pictureMedium},${picturethumbnail},${birth_date},${birth_age})
      ON CONFLICT (email) DO NOTHING;
      `;
  }

  const dataProducts = await fs.readFile("./jsonFile/products.json", "utf-8");
  const products = JSON.parse(dataProducts);

  for (const product of products) {
    const title = product?.title ?? null;
    const brand = product?.brand ?? null;
    const category = product?.category ?? null;
    const price = product?.price ?? null;
    const currency = product?.currency ?? null;
    const stock = product?.stock ?? null;
    const description_txt = product?.description_txt ?? null;
    const picture = product?.picture ?? null;
    const tags = product?.tags ?? null;
    const ref = product?.ref ?? null;
    const sizes = product?.sizes ?? null;
    const colors = product?.colors ?? null;

    await sql`
     INSERT INTO products (title, brand, category, price, currency, stock, description_txt, picture, tags, ref, sizes, colors)
    VALUES(${title},${brand},${category},${price},${currency},${stock},${description_txt},${picture},${tags},${ref},${sizes},${colors})
    `;
  }

  console.log("Import terminé !");
  process.exit();
}
importData().catch(console.error);

// // ==========================================
// // Import Products
// async function importProduct() {
//   const data = await fs.readFile("./jsonFile/products.json", "utf-8");
//   const products = JSON.parse(data);

//   for (const product of products) {
//     const title = product?.title ?? null;
//     const brand = product?.brand ?? null;
//     const category = product?.category ?? null;
//     const price = product?.price ?? null;
//     const currency = product?.currency ?? null;
//     const stock = product?.stock ?? null;
//     const description_txt = product?.description_txt ?? null;
//     const picture = product?.picture ?? null;
//     const tags = product?.tags ?? null;
//     const ref = product?.ref ?? null;
//     const sizes = product?.sizes ?? null;
//     const colors = product?.colors ?? null;

//     await sql`
//      INSERT INTO products (title, brand, category, price, currency, stock, description_txt, picture, tags, ref, sizes, colors)
//     VALUES(${title},${brand},${category},${price},${currency},${stock},${description_txt},${picture},${tags},${ref},${sizes},${colors})
//     `;
//   }
//   console.log("Import terminé !");
//   process.exit();
// }
// importProduct().catch(console.error);
