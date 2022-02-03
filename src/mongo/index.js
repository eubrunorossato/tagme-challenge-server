export default async () => {
  await mongoose.connect('mongodb://db:27017/tagme-challenge').catch(err => console.log(err));
};
