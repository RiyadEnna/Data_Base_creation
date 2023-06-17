const express = require('express')
const app = express()
const port = 3000
const { Sequelize, Op, DataTypes } = require('sequelize')

const sequelize = new Sequelize('shop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


async function connection() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connection()

const AdresseFacturation = sequelize.define("adresses_facturation", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    pays: { type: DataTypes.STRING(50) },
    region: { type: DataTypes.STRING(50) },
    code_postal: { type: DataTypes.STRING(10) },
    adresse: { type: DataTypes.STRING(100) },
    ville_id: { type: DataTypes.INTEGER },
    latitude: { type: DataTypes.DECIMAL(9, 6) },
    longitude: { type: DataTypes.DECIMAL(9, 6) }
}, {
    freezeTableName: true,
    timestamps: false
});


const billingAddress = sequelize.define("billing_address", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    street_address: { type: DataTypes.STRING(255) },
    postal_code: { type: DataTypes.STRING(10) },
    city: { type: DataTypes.STRING(255) },
    longitude: { type: DataTypes.FLOAT },
    latitude: { type: DataTypes.FLOAT }
}, {
    freezeTableName: true,
    timestamps: false
});

const brand = sequelize.define('brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const brandProduct = sequelize.define("brand_product", {
    brand_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});

const brandVille = sequelize.define("brand_ville", {
    ville_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    brand_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const carriers = sequelize.define("carriers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    shipping_fee: {
        type: DataTypes.FLOAT
    }
}, {
    freezeTableName: true,
    timestamps: false
});

const clientCarriers = sequelize.define("client_carriers", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    users_id: {
        type: DataTypes.INTEGER
    },
    carrier_id: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});

const Commande = sequelize.define("commande", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    tva: {
        type: DataTypes.DECIMAL(10, 2)
    },
    nb_product: {
        type: DataTypes.INTEGER
    },
    date_created: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING(50)
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Comments = sequelize.define("comments", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER
    },
    content: {
        type: DataTypes.TEXT
    },
    readed: {
        type: DataTypes.BOOLEAN
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    created: {
        type: DataTypes.DATE
    },
    avis: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Extra = sequelize.define("extra", {
    poids: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longeur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    largeur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Family = sequelize.define("family", {
    id_famille: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_famille: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    date_creation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_modification: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_famille_parent: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Feature = sequelize.define("feature", {
    feature_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    attribute_name: {
        type: DataTypes.STRING(255)
    },
    attribute_value: {
        type: DataTypes.STRING(255)
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Image = sequelize.define("image", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    chemin: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    date_creation: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Panier = sequelize.define("panier", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_produit: {
        type: DataTypes.INTEGER
    },
    nb_produit: {
        type: DataTypes.INTEGER
    },
    promotion_id: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    },
    latitude_produit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    longitude_produit: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    freezeTableName: true,
    timestamps: false
});

const ProductColor = sequelize.define("productcolor", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

        autoIncrement: false
    },
    color_code: {
        type: DataTypes.STRING(7),
        allowNull: true,
        charset: 'utf8mb3',
        primaryKey: true,
        collate: 'utf8mb3_unicode_ci'
    }
}, {
    tableName: 'productcolor',
    timestamps: false
});






const ProductFamily = sequelize.define("product_family", {
    id_produit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    id_famille: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const ProductFeature = sequelize.define("product_feature", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    feature_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const ProductHistory = sequelize.define('product_history', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const ProductImage = sequelize.define('product_image', {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    content: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: 'product_image',
    timestamps: false
});




const ProductPromotion = sequelize.define("product_promotion", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    promotion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true,
    timestamps: false
});



const ProductTranslation = sequelize.define("product_translations", {
    translation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false
    },
    language_code: {
        type: DataTypes.STRING(2)
    },
    name: {
        type: DataTypes.STRING(255)
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
});




const Promotion = sequelize.define("promotion", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100)
    },
    taux: {
        type: DataTypes.DECIMAL(10, 2)
    },
    enable: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});



const ShippingAddress = sequelize.define("shipping_address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    street_address: {
        type: DataTypes.STRING(255)
    },
    postal_code: {
        type: DataTypes.STRING(10)
    },
    city: {
        type: DataTypes.STRING(255)
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6)
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 6)
    }
}, {
    freezeTableName: true,
    timestamps: false
});



const Supplier = sequelize.define("supplier", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    adress_id: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true,
    timestamps: false
});




const SupplierProduct = sequelize.define("supplier_product", {
    supplier_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});



const Tag = sequelize.define("tag", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    creted: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});




const TagProduit = sequelize.define("tag_produit", {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    tag_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});



const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING(60)
    },
    prenom: {
        type: DataTypes.STRING(60)
    },
    age: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING(60)
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    date_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    date_auth: {
        type: DataTypes.DATE
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date_updated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    role: {
        type: DataTypes.ENUM('classique_user', 'admin', 'super-admin'),
        defaultValue: 'classique_user'
    }
}, {
    freezeTableName: true,
    timestamps: false
});


const VilleFrance = sequelize.define("villes_france_free", {
    ville_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    ville_departement: {
        type: DataTypes.STRING(3)
    },
    ville_slug: {
        type: DataTypes.STRING(255)
    },
    ville_nom: {
        type: DataTypes.STRING(45)
    },
    ville_nom_simple: {
        type: DataTypes.STRING(45)
    },
    ville_nom_reel: {
        type: DataTypes.STRING(45)
    },
    ville_nom_soundex: {
        type: DataTypes.STRING(20)
    },
    ville_nom_metaphone: {
        type: DataTypes.STRING(22)
    },
    ville_code_postal: {
        type: DataTypes.STRING(255)
    },
    ville_commune: {
        type: DataTypes.STRING(3)
    },
    ville_code_commune: {
        type: DataTypes.STRING(5),
        allowNull: false,
        unique: true
    },
    ville_arrondissement: {
        type: DataTypes.SMALLINT.UNSIGNED
    },
    ville_canton: {
        type: DataTypes.STRING(4)
    },
    ville_amdi: {
        type: DataTypes.SMALLINT.UNSIGNED
    },
    ville_population_2010: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ville_population_1999: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ville_population_2012: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    ville_densite_2010: {
        type: DataTypes.INTEGER
    },
    ville_surface: {
        type: DataTypes.FLOAT
    },
    ville_longitude_deg: {
        type: DataTypes.FLOAT
    },
    ville_latitude_deg: {
        type: DataTypes.FLOAT
    },
    ville_longitude_grd: {
        type: DataTypes.STRING(9)
    },
    ville_latitude_grd: {
        type: DataTypes.STRING(8)
    },
    ville_longitude_dms: {
        type: DataTypes.STRING(9)
    },
    ville_latitude_dms: {
        type: DataTypes.STRING(8)
    },
    ville_zmin: {
        type: DataTypes.INTEGER
    },
    ville_zmax: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/adresses_facturation', async (req, res) => {
    const adressesFacturation = await AdresseFacturation.findAll();
    res.send(JSON.stringify(adressesFacturation));
});

app.get('/billing_address', async (req, res) => {
    const allBillingAddresses = await billingAddress.findAll();
    res.send(JSON.stringify(allBillingAddresses));
});

app.get('/brand', async (req, res) => {
    const brands = await brand.findAll()
    res.send(JSON.stringify(brands))
})

app.get('/brand_product', async (req, res) => {
    const brandProducts = await brandProduct.findAll();
    res.send(JSON.stringify(brandProducts));
});

app.get('/brand_ville', async (req, res) => {
    const brandVilles = await brandVille.findAll();
    res.send(JSON.stringify(brandVilles));
});


app.get('/carriers', async (req, res) => {
    const allCarriers = await carriers.findAll();
    res.send(JSON.stringify(allCarriers));
});


app.get('/client_carriers', async (req, res) => {
    const allClientCarriers = await clientCarriers.findAll();
    res.send(JSON.stringify(allClientCarriers));
});

app.get('/commande', async (req, res) => {
    const allCommandes = await Commande.findAll();
    res.send(JSON.stringify(allCommandes));
});

app.get('/comments', async (req, res) => {
    const allComments = await Comments.findAll();
    res.send(JSON.stringify(allComments));
});

app.get('/extra', async (req, res) => {
    const allExtras = await Extra.findAll();
    res.send(JSON.stringify(allExtras));
});

app.get('/family', async (req, res) => {
    const allFamilies = await Family.findAll();
    res.send(JSON.stringify(allFamilies));
});


app.get('/feature', async (req, res) => {
    const allFeatures = await Feature.findAll();
    res.send(JSON.stringify(allFeatures));
});

app.get('/image', async (req, res) => {
    const allImages = await Image.findAll();
    res.send(JSON.stringify(allImages));
});

app.get('/panier', async (req, res) => {
    const allPaniers = await Panier.findAll();
    res.send(JSON.stringify(allPaniers));
});

app.get('/product', async (req, res) => {
    const allProducts = await Product.findAll();
    res.send(JSON.stringify(allProducts));
});



app.get('/product_family', async (req, res) => {
    const allProductFamilies = await ProductFamily.findAll();
    res.send(JSON.stringify(allProductFamilies));
});

app.get('/product_feature', async (req, res) => {
    const allProductFeatures = await ProductFeature.findAll();
    res.send(JSON.stringify(allProductFeatures));
});

app.get('/product_history', async (req, res) => {
    const allProductHistories = await ProductHistory.findAll();
    res.send(JSON.stringify(allProductHistories));
});

app.get('/product_image', async (req, res) => {
    const allProductImages = await ProductImage.findAll();
    res.send(JSON.stringify(allProductImages));
});

// Définir la relation avec la table `Product`
ProductColor.belongsTo(Product, { foreignKey: 'product_id' });

app.get('/productcolor', async (req, res) => {
    const allProductColors = await ProductColor.findAll();
    res.send(JSON.stringify(allProductColors));
});


app.get('/product_promotion', async (req, res) => {
    const allProductPromotions = await ProductPromotion.findAll();
    res.send(JSON.stringify(allProductPromotions));
});

app.get('/product_translations', async (req, res) => {
    const allProductTranslations = await ProductTranslation.findAll();
    res.send(JSON.stringify(allProductTranslations));
});

app.get('/promotion', async (req, res) => {
    const allPromotions = await Promotion.findAll();
    res.send(JSON.stringify(allPromotions));
});


app.get('/shipping_address', async (req, res) => {
    const allShippingAddresses = await ShippingAddress.findAll();
    res.send(JSON.stringify(allShippingAddresses));
});

app.get('/supplier', async (req, res) => {
    const allSuppliers = await Supplier.findAll();
    res.send(JSON.stringify(allSuppliers));
});


app.get('/supplier_product', async (req, res) => {
    const allSupplierProducts = await SupplierProduct.findAll();
    res.send(JSON.stringify(allSupplierProducts));
});

app.get('/tag', async (req, res) => {
    const allTags = await Tag.findAll();
    res.send(JSON.stringify(allTags));
});


app.get('/tag_produit', async (req, res) => {
    const allTagProduits = await TagProduit.findAll();
    res.send(JSON.stringify(allTagProduits));
});


app.get('/users', async (req, res) => {
    const allUsers = await User.findAll();
    res.send(JSON.stringify(allUsers));
});

app.get('/villes_france_free', async (req, res) => {
    const allVilles = await VilleFrance.findAll();
    res.send(JSON.stringify(allVilles));
});



/*
// Création d'un produit
app.get('/product/productcreate', async (req, res) => {
    const createProduct = async (title, description, price, enable, created, latitude_produit, longitude_produit) => {
        try {
            const newProduct = await Product.create({
                title: title,
                description: description,
                price: price,
                enable: enable,
                created: created,
                latitude_produit: latitude_produit,
                longitude_produit: longitude_produit
            });
            console.log('Produit créé avec succès:', newProduct);
        } catch (error) {
            console.error('Erreur lors de la création du produit:', error);
        }
    };
})

// Appel de la fonction de création de produit
createProduct('Nouveau produit', 'Description du produit', 19.99, true, new Date(), 40.7128, -74.0060);

*/



app.get('/productslast', async (req, res) => {

    const mainQuery = await product.findAll({
        limit: 10,
        order: [['PRICE', 'ASC']]
    })
    const subQuery = await product.findAll({
        limit: 10,
        order: [['CREATED', 'DESC'],]
    })
    mainQuery.subQuery = subQuery

    const products = await mainQuery
    res.send(products)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
