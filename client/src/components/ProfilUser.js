import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation.js";
import ViewBtnBook from "./Folder.Btn/ViewBtnBook.js";
import UsersProductCardShop from "./Folder.Users/UsersProductCardShop.js";
import UsersProductCardView from "./Folder.Users/UsersProductCardView.js";

const ProfilUser = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [userRegistered, setUserRegistered] = useState(null);
  const [userBorn, setUserBorn] = useState(null);
  const [viewData, setViewData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [activeSection, setActiveSection] = useState("general");
  const [activeSectionShop, setActiveSectionShop] = useState("shop");

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    //CALLBACK : le code à exécuter

    axios
      .get(`http://localhost:8000/api/products`)
      .then((res) => setProductsData(res.data.products));

    axios.get(`http://localhost:8000/api/users/${id}`).then((res) => {
      const date = new Date(res.data.data.birth_date);
      const born = new Date(res.data.data);
      setUserData(res.data.data);
      setUserId(res.data.data.id);
      setUserRegistered(date);
      setUserBorn(born);
    });

    axios
      .get(`http://localhost:8000/api/purchase`)
      .then((res) => setPurchaseData(res.data.purchase));

    axios
      .get(`http://localhost:8000/api/view`)
      .then((res) => setViewData(res.data.view));
  }, [id]); //DÉPENDANCES : "surveille id, et relance le callback si id change"

  return (
    <div className="body-user">
      <Navigation />
      {userData && (
        <div key={userData.id} className="profil-container">
          <div className="profil-card-name">
            <img src={userData.picture_medium} alt={userData.last_name} />
            <div className="profil-name">
              <h3>
                {userData.title} {userData.last_name} {userData.first_name}
              </h3>
              <span className="vip">Client Vip</span>
            </div>
          </div>
          <ul className="list-engage">
            <li className="item-engage">
              <span>CA 3 mois</span>
              <p>12 832€</p>
            </li>
            <li className="item-engage">
              <span>CA 12 mois</span>
              <p>27 961€</p>
            </li>
            <li className="item-engage">
              <span>CA TOTAL</span>
              <p>120 832€</p>
            </li>
          </ul>
        </div>
      )}
      <div className="main-container">
        <div className="main-title">
          <div
            className={`btn-container ${activeSection === "general" ? "active-general" : ""}`}
          >
            <h4
              className="btn-general btn-h4"
              onClick={() => setActiveSection("general")}
            >
              GÉNÉRAL
            </h4>
          </div>
          <div
            className={`btn-container ${activeSection === "histo" ? "active-histo" : ""}`}
          >
            <h4
              className="btn-histo btn-h4"
              onClick={() => setActiveSection("histo")}
            >
              HISTORIQUE
            </h4>
          </div>
        </div>
        {activeSection === "general" && (
          <div className="class-event-useref">
            {userData && (
              <div key={userData.id} className="card-user-main">
                <h3>Informations générales</h3>
                <ul className="list-main">
                  <li className="item-main">
                    {" "}
                    <p>Client(e) depuis le</p>
                    <p>
                      {userRegistered &&
                        userRegistered.toLocaleDateString("fr-FR", options)}
                    </p>
                  </li>
                  <li className="item-main">
                    <p>N de téléphone</p>
                    <p>{userData.phone}</p>
                  </li>
                  <li className="item-main">
                    <p>Email</p>
                    <p>{userData.email}</p>
                  </li>
                  <li className="item-main">
                    <p>Date de naissance</p>
                    <p>
                      {userBorn &&
                        userBorn.toLocaleDateString("fr-FR", options)}
                    </p>
                  </li>
                  <li className="item-main">
                    <p>Nationalité</p>
                    <p>{userData.country}</p>
                  </li>
                  <li className="item-main">
                    <p>Passeport</p>
                    <p>{userData.md5}</p>
                  </li>
                  <li className="item-main">
                    <p>Magasin principal</p>
                    <p>Automne PARIS</p>
                  </li>
                  <li className="item-main">
                    <p>PS référent</p>
                    <p>Maïa Leblanc</p>
                  </li>
                  <li className="item-main">
                    <p>ID client</p>
                    <p>{userData.salt}</p>
                  </li>
                </ul>
              </div>
            )}
            <div className="like-container">
              <h3>Préférences</h3>
              <div className="like-position">
                <div className="like-component">
                  <h4>Marques</h4>
                  <div className="like-left">
                    <img src="/assets/Figpie.webp" alt="" />
                  </div>
                  <div className="like-right">
                    <p>
                      <span></span>Chaumet (64%)
                    </p>
                    <p>
                      <span></span>Dior (27%)
                    </p>
                    <p>
                      <span></span>Moncier (9%)
                    </p>
                  </div>
                </div>
                <div className="like-component">
                  <h4>Marché</h4>
                  <div className="like-left">
                    <img src="/assets/Figpie.webp" alt="" />
                  </div>
                  <div className="like-right">
                    <p>
                      <span></span>Joaillerie (64%)
                    </p>
                    <p>
                      <span></span>Vêtement (27%)
                    </p>
                    <p>
                      <span></span>Maroquinerie (9%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {activeSection === "histo" && (
        <div className="histo-container">
          <div className="product-interaction-container">
            <div className="shop-view-title-container">
              <div
                className={`shop-view-cotnainer ${activeSectionShop === "shop" ? "active-shop" : ""}`}
              >
                <h4 onClick={() => setActiveSectionShop("shop")}>
                  Tous les achats
                </h4>
              </div>
              <div
                className={`shop-view-cotnainer ${activeSectionShop === "view" ? "active-view" : ""}`}
              >
                <h4 onClick={() => setActiveSectionShop("view")}>Sélections</h4>
              </div>
            </div>
            {activeSectionShop === "shop" && (
              <div className="buy-container same-style-container">
                {/* =========================================== */}

                <div className="info-buy-container">
                  <h4>9 mars 2026</h4>
                  <p>
                    <span>Automne - Paris</span>
                  </p>
                  <p>
                    articles{" "}
                    {
                      purchaseData.filter(
                        (item) => item.type_session === "buyShop",
                      ).length
                    }
                  </p>
                </div>

                {purchaseData
                  .filter((item) => item.type_session === "buyShop")
                  .map((item) => (
                    <UsersProductCardShop
                      key={item.product_id}
                      item={item}
                      typeSection={item.type_session}
                      userId={item.user_id}
                    />
                  ))}

                {purchaseData
                  .filter((item) => item.type_session === "buyNet")
                  .map((item) => (
                    <UsersProductCardShop
                      key={item.product_id}
                      item={item}
                      typeSection={item.type_session}
                      userId={item.user_id}
                    />
                  ))}

                {purchaseData
                  .filter((item) => item.type_session === "refund")
                  .map((item) => (
                    <UsersProductCardShop
                      key={item.product_id}
                      item={item}
                      typeSection={item.type_session}
                      userId={item.user_id}
                    />
                  ))}

                {/* =========================================== */}
              </div>
            )}
            {activeSectionShop === "view" && (
              <div className="view-container same-style-container">
                <div className="info-buy-container">
                  <h4>3 mars 2026</h4>
                  <p>
                    <span>Automne - Paris</span>
                  </p>
                  <p>articles {viewData.length}</p>
                </div>
                {viewData.map((item) => (
                  <UsersProductCardView key={item.product_id} item={item} />
                ))}
              </div>
            )}
          </div>
          <ul className="container-book">
            {productsData.length > 0 &&
              productsData
                .sort((a, b) => a.brand.localeCompare(b.brand))
                .map((product) => (
                  <div key={product.id} className="product-card-user-container">
                    <div className="img-container">
                      <img
                        src={product.picture}
                        alt=""
                        className="img-product"
                      />
                    </div>
                    <div className="description-container">
                      <div className="description-left">
                        <p className="product-name">{product.title}</p>
                        <span className="product-brand">{product.brand}</span>
                      </div>
                      <div className="price-product">
                        <p>{product.price} €</p>
                      </div>
                    </div>
                    <ViewBtnBook
                      key={product.id}
                      product={product}
                      userId={userId}
                    />
                  </div>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfilUser;
