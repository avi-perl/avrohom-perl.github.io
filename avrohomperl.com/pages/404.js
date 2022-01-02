import Card from "../Components/Card";

export default function Error404() {
  return (
    <Card disableContentToggle={true} cardContentOpen={true}>
      <div className="p-5 text-center">
        <h1>🤦‍♂️</h1>
        <h3>404 - Page not found</h3>
      </div>
    </Card>
  );
}
