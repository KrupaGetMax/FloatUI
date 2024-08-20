import React from "react";

const Branding = () => {
  return (
    <>
      <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Why choose us?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left md:text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/33934421246349.562fe0977dda8.JPG"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400 w-96 h-80" // Adjust size here
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Simple integration
            </h3>
            <p className="sm:text-lg mt-6">
              Use the LocaleData gem to download translations directly into your
              Ruby on Rails projects using the provided command line interface.
              Just create a project and follow the step-by-step instructions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left md:text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://i.etsystatic.com/18578543/r/il/f7fe24/3364113152/il_570xN.3364113152_t7y1.jpg"
              alt="project members"
              className="inline-block rounded shadow-lg border border-merino-400 w-96 h-80" // Adjust size here
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6">
              All LocaleData projects are private. Each project can have
              multiple collaborators with different roles and access
              permissions. You determine who can see and edit your translations.
              Just add admins, developers, translators and configure their
              access rights.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left  md:text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://www.thewatchtower.com/assets/images/blog_images/get-ready-for-outlandish-visuals-the-best-wall-branding-every-conference-room-needs1680589505.jpg"
              alt="editor"
              className="inline-block rounded shadow-lg border border-merino-400 w-96 h-80" // Adjust size here
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              No more syntax errors
            </h3>
            <p className="sm:text-lg mt-6">
              LocaleData provides you easy import/export functions for your YAML
              files. Use a simple editor with many predefined languages to
              manage your locales. LocaleData also supports multiple translation
              types, such as simple text, plural forms, numbers, booleans,
              symbols, arrays, ...
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left md:text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://en.idei.club/uploads/posts/2023-03/thumbs/1679555632_en-idei-club-p-digital-marketing-office-dizain-pinterest-5.jpg"
              alt="bulk editing"
              className="inline-block rounded shadow-lg border border-merino-400 w-96 h-80" // Adjust size here
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Bulk editing
            </h3>
            <p className="sm:text-lg mt-6">
              Do you need to change the path of many translation keys at once?
              No problem, just use the bulk editing feature and enjoy the
              results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branding;
