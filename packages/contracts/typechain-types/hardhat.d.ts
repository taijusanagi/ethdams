/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BaseAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAccount__factory>;
    getContractFactory(
      name: "BasePaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePaymaster__factory>;
    getContractFactory(
      name: "IAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccount__factory>;
    getContractFactory(
      name: "IAggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAggregator__factory>;
    getContractFactory(
      name: "IEntryPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEntryPoint__factory>;
    getContractFactory(
      name: "INonceManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonceManager__factory>;
    getContractFactory(
      name: "IPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPaymaster__factory>;
    getContractFactory(
      name: "IStakeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakeManager__factory>;
    getContractFactory(
      name: "TokenCallbackHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenCallbackHandler__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1967",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IERC777Recipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC777Recipient__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ISismoConnectVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISismoConnectVerifier__factory>;
    getContractFactory(
      name: "SismoConnect",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SismoConnect__factory>;
    getContractFactory(
      name: "AuthRequestBuilder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuthRequestBuilder__factory>;
    getContractFactory(
      name: "ClaimRequestBuilder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClaimRequestBuilder__factory>;
    getContractFactory(
      name: "RequestBuilder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RequestBuilder__factory>;
    getContractFactory(
      name: "SignatureBuilder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SignatureBuilder__factory>;
    getContractFactory(
      name: "SismoConnectHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SismoConnectHelper__factory>;
    getContractFactory(
      name: "IAddressesProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAddressesProvider__factory>;
    getContractFactory(
      name: "IHydraS2Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHydraS2Verifier__factory>;
    getContractFactory(
      name: "GitcoinPassportPaymaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GitcoinPassportPaymaster__factory>;
    getContractFactory(
      name: "NinjaAccount",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NinjaAccount__factory>;
    getContractFactory(
      name: "NinjaAccountFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NinjaAccountFactory__factory>;
    getContractFactory(
      name: "SismoVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SismoVerifier__factory>;

    getContractAt(
      name: "BaseAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAccount>;
    getContractAt(
      name: "BasePaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePaymaster>;
    getContractAt(
      name: "IAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccount>;
    getContractAt(
      name: "IAggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAggregator>;
    getContractAt(
      name: "IEntryPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEntryPoint>;
    getContractAt(
      name: "INonceManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonceManager>;
    getContractAt(
      name: "IPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPaymaster>;
    getContractAt(
      name: "IStakeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakeManager>;
    getContractAt(
      name: "TokenCallbackHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenCallbackHandler>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IERC1967",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IERC777Recipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC777Recipient>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ISismoConnectVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISismoConnectVerifier>;
    getContractAt(
      name: "SismoConnect",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SismoConnect>;
    getContractAt(
      name: "AuthRequestBuilder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuthRequestBuilder>;
    getContractAt(
      name: "ClaimRequestBuilder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ClaimRequestBuilder>;
    getContractAt(
      name: "RequestBuilder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RequestBuilder>;
    getContractAt(
      name: "SignatureBuilder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SignatureBuilder>;
    getContractAt(
      name: "SismoConnectHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SismoConnectHelper>;
    getContractAt(
      name: "IAddressesProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAddressesProvider>;
    getContractAt(
      name: "IHydraS2Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHydraS2Verifier>;
    getContractAt(
      name: "GitcoinPassportPaymaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GitcoinPassportPaymaster>;
    getContractAt(
      name: "NinjaAccount",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NinjaAccount>;
    getContractAt(
      name: "NinjaAccountFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NinjaAccountFactory>;
    getContractAt(
      name: "SismoVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SismoVerifier>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}