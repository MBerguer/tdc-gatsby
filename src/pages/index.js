import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const repos = graphql`
  query debt {
    githubQuery {
      search(query: "org:debtcollective", type: REPOSITORY, first: 50) {
        repositoryCount
        edges {
          node {
            ... on GitHub_Repository {
              name
              description
              url
              pullRequests {
                totalCount
              }
              updatedAt
              issues {
                totalCount
              }
              forks {
                totalCount
              }
              licenseInfo {
                name
              }                
              languages(first: 2) {
                edges {
                  node {
                    name
                  }
                }
              }              
              stargazers {
                totalCount
              }
              mentionableUsers(first: 2) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const colors  = {
  "Mercury": "#ff2b2b",
  "TypeScript": "#2b7489",
  "PureBasic": "#5a6986",
  "Objective-C++": "#6866fb",
  "Self": "#0579aa",
  "edn": "#db5855",
  "NewLisp": "#87AED7",
  "Jupyter Notebook": "#DA5B0B",
  "Rebol": "#358a5b",
  "Frege": "#00cafe",
  "Dart": "#00B4AB",
  "AspectJ": "#a957b0",
  "Shell": "#89e051",
  "Web Ontology Language": "#9cc9dd",
  "xBase": "#403a40",
  "Eiffel": "#946d57",
  "Nix": "#7e7eff",
  "RAML": "#77d9fb",
  "MTML": "#b7e1f4",
  "Racket": "#22228f",
  "Elixir": "#6e4a7e",
  "SAS": "#B34936",
  "Agda": "#315665",
  "wisp": "#7582D1",
  "D": "#ba595e",
  "Kotlin": "#F18E33",
  "Opal": "#f7ede0",
  "Crystal": "#776791",
  "Objective-C": "#438eff",
  "ColdFusion CFC": "#ed2cd6",
  "Oz": "#fab738",
  "Mirah": "#c7a938",
  "Objective-J": "#ff0c5a",
  "Gosu": "#82937f",
  "FreeMarker": "#0050b2",
  "Ruby": "#701516",
  "Component Pascal": "#b0ce4e",
  "Arc": "#aa2afe",
  "Brainfuck": "#2F2530",
  "Nit": "#009917",
  "APL": "#5A8164",
  "Go": "#375eab",
  "Visual Basic": "#945db7",
  "PHP": "#4F5D95",
  "Cirru": "#ccccff",
  "SQF": "#3F3F3F",
  "Glyph": "#e4cc98",
  "Java": "#b07219",
  "MAXScript": "#00a6a6",
  "Scala": "#DC322F",
  "Makefile": "#427819",
  "ColdFusion": "#ed2cd6",
  "Perl": "#0298c3",
  "Lua": "#000080",
  "Vue": "#2c3e50",
  "Verilog": "#b2b7f8",
  "Factor": "#636746",
  "Haxe": "#df7900",
  "Pure Data": "#91de79",
  "Forth": "#341708",
  "Red": "#ee0000",
  "Hy": "#7790B2",
  "Volt": "#1F1F1F",
  "LSL": "#3d9970",
  "eC": "#913960",
  "CoffeeScript": "#244776",
  "HTML": "#e44b23",
  "Lex": "#DBCA00",
  "API Blueprint": "#2ACCA8",
  "Swift": "#ffac45",
  "C": "#555555",
  "AutoHotkey": "#6594b9",
  "Isabelle": "#FEFE00",
  "Metal": "#8f14e9",
  "Clarion": "#db901e",
  "JSONiq": "#40d47e",
  "Boo": "#d4bec1",
  "AutoIt": "#1C3552",
  "Clojure": "#db5855",
  "Rust": "#dea584",
  "Prolog": "#74283c",
  "SourcePawn": "#5c7611",
  "AMPL": "#E6EFBB",
  "FORTRAN": "#4d41b1",
  "ANTLR": "#9DC3FF",
  "Harbour": "#0e60e3",
  "Tcl": "#e4cc98",
  "BlitzMax": "#cd6400",
  "PigLatin": "#fcd7de",
  "Lasso": "#999999",
  "ECL": "#8a1267",
  "VHDL": "#adb2cb",
  "Elm": "#60B5CC",
  "Propeller Spin": "#7fa2a7",
  "X10": "#4B6BEF",
  "IDL": "#a3522f",
  "ATS": "#1ac620",
  "Ada": "#02f88c",
  "Unity3D Asset": "#ab69a1",
  "Nu": "#c9df40",
  "LFE": "#004200",
  "SuperCollider": "#46390b",
  "Oxygene": "#cdd0e3",
  "ASP": "#6a40fd",
  "Assembly": "#6E4C13",
  "Gnuplot": "#f0a9f0",
  "JFlex": "#DBCA00",
  "NetLinx": "#0aa0ff",
  "Turing": "#45f715",
  "Vala": "#fbe5cd",
  "Processing": "#0096D8",
  "Arduino": "#bd79d1",
  "FLUX": "#88ccff",
  "NetLogo": "#ff6375",
  "C Sharp": "#178600",
  "CSS": "#563d7c",
  "Emacs Lisp": "#c065db",
  "Stan": "#b2011d",
  "SaltStack": "#646464",
  "QML": "#44a51c",
  "Pike": "#005390",
  "LOLCODE": "#cc9900",
  "ooc": "#b0b77e",
  "Handlebars": "#01a9d6",
  "J": "#9EEDFF",
  "Mask": "#f97732",
  "EmberScript": "#FFF4F3",
  "TeX": "#3D6117",
  "Nemerle": "#3d3c6e",
  "KRL": "#28431f",
  "Ren'Py": "#ff7f7f",
  "Unified Parallel C": "#4e3617",
  "Golo": "#88562A",
  "Fancy": "#7b9db4",
  "OCaml": "#3be133",
  "Shen": "#120F14",
  "Pascal": "#b0ce4e",
  "F#": "#b845fc",
  "Puppet": "#302B6D",
  "ActionScript": "#882B0F",
  "Diff": "#88dddd",
  "Ragel in Ruby Host": "#9d5200",
  "Fantom": "#dbded5",
  "Zephir": "#118f9e",
  "Click": "#E4E6F3",
  "Smalltalk": "#596706",
  "DM": "#447265",
  "Ioke": "#078193",
  "PogoScript": "#d80074",
  "LiveScript": "#499886",
  "JavaScript": "#f1e05a",
  "VimL": "#199f4b",
  "PureScript": "#1D222D",
  "ABAP": "#E8274B",
  "Matlab": "#bb92ac",
  "Slash": "#007eff",
  "R": "#198ce7",
  "Erlang": "#B83998",
  "Pan": "#cc0000",
  "LookML": "#652B81",
  "Eagle": "#814C05",
  "Scheme": "#1e4aec",
  "PLSQL": "#dad8d8",
  "Python": "#3572A5",
  "Max": "#c4a79c",
  "Common Lisp": "#3fb68b",
  "Latte": "#A8FF97",
  "XQuery": "#5232e7",
  "Omgrofl": "#cabbff",
  "XC": "#99DA07",
  "Nimrod": "#37775b",
  "SystemVerilog": "#DAE1C2",
  "Chapel": "#8dc63f",
  "Groovy": "#e69f56",
  "Dylan": "#6c616e",
  "E": "#ccce35",
  "Parrot": "#f3ca0a",
  "Grammatical Framework": "#79aa7a",
  "Game Maker Language": "#8fb200",
  "Papyrus": "#6600cc",
  "NetLinx+ERB": "#747faa",
  "Clean": "#3F85AF",
  "Alloy": "#64C800",
  "Squirrel": "#800000",
  "PAWN": "#dbb284",
  "UnrealScript": "#a54c4d",
  "Standard ML": "#dc566d",
  "Slim": "#ff8f77",
  "Perl6": "#0000fb",
  "Julia": "#a270ba",
  "Haskell": "#29b544",
  "NCL": "#28431f",
  "Io": "#a9188d",
  "Rouge": "#cc0088",
  "cpp": "#f34b7d",
  "AGS Script": "#B9D9FF",
  "Dogescript": "#cca760",
  "nesC": "#94B0C7"
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <h1 className="f0-light">Repositories</h1>

    <div className="d-flex f5-light">
      Total listed: <b className="ml-1">{data.githubQuery.search.repositoryCount}</b>
    </div>

    <div className="org-repos">

      <ul className="repos-list">
        {data.githubQuery.search.edges.map(({ node: repoData }) =>

          <li className="public source d-block pt-1 pb-6 border-bottom" itemProp="owns" itemType="http://schema.org/Code"
            itemScope="itemscope">

          <div className="flex-justify-between d-flex">
            <div className="flex-auto">
              <h3 className="wb-break-all mb-0 mt-4">
                <a className="d-inline-block" href={repoData.url}
                   itemProp="name codeRepository" data-hovercard-type="repository">
                  {repoData.name}
                </a>
              </h3>
              <p className="break-word text-gray mb-0 f5" itemProp="description">
                {repoData.description}
              </p>
            </div>
          </div>


          <div className="text-gray f6 mt-2 d-flex flex-wrap flex-content-center mb-1">

            {repoData.languages.edges.map(({ node: lang}) =>
              <span className="mr-3 d-flex flex-wrap flex-content-center">
                <span className="repo-language-color mr-1" style={{ backgroundColor: colors[lang.name] }} />
                <span itemProp="programmingLanguage">{lang.name}</span>
              </span>
            )}

            {(repoData.licenseInfo?.name)  &&
            <span className="d-flex flex-wrap flex-content-center mr-3"> {/* Licence */}
              <svg height="16" className="octicon octicon-law mr-1" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                <path fill-rule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z" />
              </svg>
              {repoData.licenseInfo?.name}
            </span>}


            <span className="d-flex flex-wrap flex-content-center mr-3 text-gray"> {/* Fork */}
              <svg height="16" className="octicon octicon-repo-forked mr-1" aria-label="fork" viewBox="0 0 10 16" version="1.1" width="10" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
              </svg>
              {repoData.forks.totalCount}
            </span>


            <span className="d-flex flex-wrap flex-content-center mr-3 text-gray"> {/* Stars */}
              <svg height="16" className="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" />
              </svg>
              {repoData.stargazers.totalCount}
            </span>

            <span className="d-flex flex-wrap flex-content-center no-wrap muted-link mr-3"> {/* Issues */}
              <svg height="16" className="octicon octicon-issue-opened mr-1" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true">
                <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
              </svg>
              {repoData.issues.totalCount}
            </span>

            <span className="d-flex flex-wrap flex-content-center no-wrap muted-link mr-3"> {/* Pulls */}
              <svg height="16" className="octicon octicon-git-pull-request mr-1" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                <path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" />
              </svg>
              {repoData.pullRequests.totalCount}
            </span>
          </div>
          <span className="text-gray f6">
            Updated on {(new Date(repoData.updatedAt)).toUTCString()}
          </span>

          <div className="text-gray f6 mt-2">
            <b>Most active users: </b>
              {repoData.mentionableUsers.edges.map(({ node: lang}) =>
                lang.name
              ).join(", ")
              }
          </div>

        </li>
        )}
      </ul>

    </div>


  </Layout>
)

export default IndexPage
