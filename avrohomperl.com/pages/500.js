import Card from "../Components/Card";

export default function Error500() {
  return (
    <Card disableContentToggle={true} cardContentOpen={true}>
      <div className="p-5 text-center">
        <h1>🤦‍♂️</h1>
        <h3>500 - Server-side error occurred</h3>
      </div>
    </Card>
  );
}
