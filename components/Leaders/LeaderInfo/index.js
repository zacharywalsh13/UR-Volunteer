
export default function Leaders() {
  const people = [
    {
      name: 'Person 1',
      subtitle: 'Persons Position',
      imageUrl: '/Images/headshot-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    },
    {
      name: 'Person 2',
      subtitle: 'Persons Position',
      imageUrl: '/Images/headshot-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    },
    {
      name: 'Person 3',
      subtitle: 'Persons Position',
      imageUrl: '/Images/headshot-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    },
    {
      name: 'Person 4',
      subtitle: 'Persons Position',
      imageUrl: '/Images/headshot-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    },
    {
      name: 'Person 5',
      subtitle: 'Persons Position',
      imageUrl: '/Images/headshot-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    },
    {
      name: 'Person 6',
      subtitle: 'Persons Position',
      imageUrl: '/Images/headshot-2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl. Donec auctor, nisl eget ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl eget nisl.',
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img className="w-full h-56 object-cover rounded mb-6" src={person.imageUrl} alt={person.name} />
            <h3 className="text-xl font-bold">{person.name}</h3>
            <h5 className="mb-4 font-light	">{person.subtitle}</h5>
            <p className="text-gray-600">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

