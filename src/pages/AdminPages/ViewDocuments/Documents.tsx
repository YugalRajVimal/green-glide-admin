import Label from "../../../components/form/Label";

export default function Documents() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label>Aadhar Card</Label>
          <img
            src="/images/grid-image/image-02.png"
            alt=" grid"
            className="border border-gray-200 rounded-xl dark:border-gray-800"
          />
        </div>

        <div>
        <Label>Driving Lisence</Label>

          <img
            src="/images/grid-image/image-03.png"
            alt=" grid"
            className="border border-gray-200 rounded-xl dark:border-gray-800"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
        <Label>Address Proof</Label>

          <img
            src="/images/grid-image/image-02.png"
            alt=" grid"
            className="border border-gray-200 rounded-xl dark:border-gray-800"
          />
        </div>

       
      </div>
    </>
  );
}
