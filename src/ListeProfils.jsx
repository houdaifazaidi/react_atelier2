import CarteProfil from './CarteProfil';

function ListeProfils() {
  const profils = [
    {
      nom: 'Alice',
      age: 25,
      profession: 'Développeuse',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6QXl26LDglTrtcs263_rB3xFZhHgIumu_2OzxcSEdA&s', // URL externe
    },
    {
      nom: 'Bob',
      age: 30,
      profession: 'Designer',
      image: '/images/profile2.jpg', // image locale placée dans public/images
    },
    {
      nom: 'Charlie',
      age: 28,
      profession: 'Ingénieur IA',
      image: 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png', // une autre image externe
    }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {profils.map((profil, index) => (
        <CarteProfil
          key={index}
          nom={profil.nom}
          age={profil.age}
          profession={profil.profession}
          image={profil.image}
        />
      ))}
    </div>
  );
}

export default ListeProfils;
