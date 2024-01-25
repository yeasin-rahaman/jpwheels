import Image from "next/image";

const SellerDetail2 = () => {
    return (
        <>
            <div className="d-flex align-items-center mb30">
                <div className="flex-shrink-0">
                    <Image
                        width={60}
                        height={60}
                        className="mr-3 author_img w60"
                        src="/images/japanwheelsLogo.png"
                        alt="author.png"
                    />
                </div>

                <div className="flex-grow-1 ms-3">
                    <h5 className="mt0 mb5 fz16 heading-color fw600">

                    </h5>
                    <p className="mb0 tdu">
                        <span className="flaticon-phone-call pr5 vam" />
                        +81 70-4375-4845
                        <br />
                        mustafa@japanwheels.com
                    </p>
                </div>
            </div>
            {/* End d-flex */}
            <p>
                116-002 Arakawa-Ku,
                Arakawa 3-6-4
                Tokyo, Japan
            </p>

            <div className="row">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-block btn-thm mt10 mb20">
                        Send Email
                    </button>
                    <a href="https://wa.me/+8801675440454" target="_blank">
                        <button type="submit" className="btn btn-block btn-whatsapp mb0">
                            <span className="flaticon-whatsapp mr10 text-white" />
                            WhatsApp
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default SellerDetail2;
