import { useParams } from "react-router-dom";

export default function Billboard() {
    const params = useParams();
    console.log(params);
  return (
    <header>
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">
                    {params && params.id ? params.id : "shop in style"}

                </h1>
                <p className="lead fw-normal text-white mb-0">Flaunt your way</p>
            </div>
        </div>
    </header>
  );
}

