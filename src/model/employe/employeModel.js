const db = require('../../config/db_hireapp')

module.exports = {
  getAllModelEmploye: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM employe`, (err, result) => {
        err ? reject(new Error(err.message)) : resolve(result);
      });
    });
  },
  getDetailEmploye: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM employe WHERE id_employe=${id}`,
        (err, result) => {
          err ? reject(new Error(err.message)) : resolve(result);
        }
      );
    });
  },
  loginModelEmploye: (data) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM employe WHERE email='${data.email}'`,
        (err, result) => {
          err ? reject(new Error(err.message)) : resolve(result);
        }
      );
    });
  },
  register: (name, email, phone_number, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO employe (name, email, phone_number, password, status) VALUES ('${name}', '${email}', '${phone_number}', '${password}', 0)`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  verification: (email) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE employe set status = 1, image_employe = 'default.jpg' WHERE email = '${email}'`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  UpdateRefreshToken: (token, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE employe SET refreshtoken ='${token}' WHERE id_employe = '${id}'`,
        (err, result) => {
          if (err) {
            reject(new Error(err));
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  logoutModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE employe SET refreshtoken=null WHERE id_employe='${id}'`,
        (err, result) => {
          err ? reject(new Error(err.message)) : resolve(result);
        }
      );
    });
  },
  deleteModel: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM employe WHERE id_employe='${id}'`,
        (err, result) => {
          err ? reject(new Error(err.message)) : resolve(result);
        }
      );
    });
  },
  updateEmploye: (
    name,
    jobdesk,
    domisili,
    email,
    workplace,
    description,
    instagram,
    github,
    linkedin,
    phone_number,
    id,
    image
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE employe set name='${name}', image_employe='${image}', phone_number=${phone_number}, jobdesk='${jobdesk}', domisili='${domisili}', workplace='${workplace}', description='${description}', instagram='${instagram}', github='${github}', linkedin='${linkedin}'  WHERE id_employe = '${id}'  `,
        (err, result) => {
          if (err) {
            console.log(err.message)
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  insertExpreience: (
    position,
    company_name,
    month_year,
    description,
    id_employe,
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO work_experience (position, company_name, month_year, description, id_employe) VALUES ('${position}', '${company_name}', '${month_year}', '${description}', ${id_employe})`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  insertPortofolio: (
    apk_name,
    link_repo,
    type_portfolio,
    image_portfolio,
    id_employe
  ) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO portfolio (apk_name, link_repo, type_portfolio, image_portfolio, id_employe) VALUES('${apk_name}', '${link_repo}', '${type_portfolio}', '${image_portfolio}', ${id_employe})`,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  },
  inseertSkill: (name, id) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO skills (name_skill, id_employe) VALUES('${name}', ${id})`, (err,result) => {
        if(err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
};