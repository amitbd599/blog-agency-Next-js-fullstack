import DashboardMaster from "@/components/DashboardMaster";

export default function Home() {
  return (
    <main>
      <DashboardMaster>
        {/* Service Input Form */}

        <div>
          <div className="grid ">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
              <h1 className="text-xl font-semibold">
                Add Blog - please fill in your information to continue
              </h1>
              <form className="mt-6">
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Blog Title
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Blog Title"
                      autoComplete="given-name"
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Blog Image CDN Link
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Image CDN Link"
                      autoComplete="given-name"
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Image CDN Link"
                      className="block text-xs font-semibold text-gray-600 uppercase"
                    >
                      Image CDN Link
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      placeholder="Image CDN Link"
                      rows="10"
                      className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  Add Blog
                </button>
              </form>
            </div>
          </div>

          <br />
          <br />
          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Blog Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Blog Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Product Designer</td>
                  <td className="px-6 py-4">
                    <img src="" alt="" className="w-[80px]" />
                  </td>
                  <td className="px-6 py-4">50544100065dfdsfgdsfg</td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4">
                      <a x-data="{ tooltip: 'Delete' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DashboardMaster>
    </main>
  );
}
