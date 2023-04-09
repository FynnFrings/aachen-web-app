import Titel from "@/components/Titel";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-5 items-start mb-16 mx-5">
        <Titel
          titel={"Titel"}
          addInfo={"Fynn Frings • 01. April 2023"}
          background={"bg-[#fac520]"}
        />
        <div className="">
          <h2 className="text-white text-4xl font-bold mt-7">Titel</h2>
          <p className="text-slate-300 text-xl mb-7">
            Fynn Frings • 01. April 2023
          </p>
          <p className="text-slate-300 text-xl">
            Lorem ipsum dolor sit amet consectetur. Accumsan ac metus vestibulum
            aliquam non. Molestie sed non senectus cursus risus. Volutpat ut id
            sed et amet enim elementum. Faucibus etiam rhoncus viverra congue
            sem. Sollicitudin eu egestas in id eget quam facilisis. Odio viverra
            nibh pharetra lacus platea nullam ipsum. Egestas auctor sit velit
            morbi ridiculus lacus. Laoreet id sed non vitae convallis orci id.
            Quis nisi nulla sagittis etiam. Accumsan turpis nullam risus ornare
            risus sit adipiscing. Risus diam nibh amet quam consequat gravida
            massa scelerisque odio. Sed in diam convallis risus commodo egestas
            at tortor. Enim nunc at elementum facilisis elementum nulla.
            <br />
            <br />
            Cras nec tortor vel amet risus. Amet lacinia volutpat fermentum
            ultricies id. Id nulla nisl feugiat mus diam lacus accumsan
            maecenas. Ullamcorper proin duis etiam amet ut amet ornare.
            Dignissim donec id in magna sagittis mi lobortis. Diam diam ornare
            quis dui pellentesque vel convallis. Tellus morbi faucibus feugiat
            habitant ullamcorper nec ultrices nibh faucibus. Sociis lectus in
            mauris nunc pretium.
            <br />
            <br />
            Pellentesque ut non integer ut lacus. Vestibulum mattis praesent
            rhoncus amet. Amet pellentesque id molestie a blandit bibendum.
            Pulvinar ullamcorper luctus sit sem amet morbi faucibus. Gravida
            faucibus mattis urna cras tellus et quis. Neque leo dignissim in
            tellus. Lectus nec adipiscing et ullamcorper. Nulla senectus
            placerat lectus nunc egestas. Nunc sapien neque egestas tristique
            donec. Viverra fringilla amet sit id molestie. Tincidunt sagittis
            diam tincidunt auctor magna consectetur. Quis diam vulputate
            bibendum pretium amet bibendum interdum facilisis risus. Non id
            aliquet bibendum est tincidunt quam.
            <br />
            <br />
            Habitasse enim quisque commodo habitasse lobortis rhoncus arcu.
            Purus velit aliquam et urna maecenas. Nullam nulla tortor fermentum
            semper viverra egestas ut arcu ut. Neque interdum at eu vestibulum
            fermentum pharetra diam. Vitae magnis eget orci tristique etiam
            hendrerit sem duis. Suscipit tincidunt libero pretium laoreet vel.
            Vestibulum dignissim penatibus mi nulla erat lorem a. Convallis enim
            fermentum nulla purus. In egestas tempor quam ac cras est urna. Leo
            tellus metus augue nibh bibendum purus felis. Nam id lacus sed
            dignissim donec quam. Etiam nulla urna habitasse adipiscing egestas
            cursus enim. Urna fermentum suspendisse aliquam feugiat.
          </p>
        </div>
        <Link href={"/blogs"}>
          <button className="text-white text-xl font-light text-center border border-solid rounded-lg py-4 px-9 my-5 hover:scale-95 transition duration-200">
            Weitere Beiträge
          </button>
        </Link>
      </div>
    </>
  );
};

export default BlogDetails;
