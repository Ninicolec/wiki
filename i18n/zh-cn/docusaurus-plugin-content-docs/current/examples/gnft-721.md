---
sidebar_label: 'GNFT (ERC-721)'
sidebar_position: 4
---

# Gear Non-Fungible Token

## 简介

在 Gear，我们希望为来自不同背景的开发者提供一个生态系统。我们必须注意到，与其他支持流行协议如 ERC-20 或 ERC-721 的平台相比，Gear 提供了更先进的功能和技术发展。然而，如果忽略这些广泛使用的接口，而支持任意的、但现代的实现，将是效率低下的。因此，Gear 提供了非同质化代币(GNFT)的支持，以及基于 Gear 愿景改进的标准。

在这篇文章中，我们将介绍 Gear 的 GNFT 接口的使用情况，以及一个 NFT 实现的例子。

## ERC-721 接口

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) 协议是社区接受的非同质代币（NFTs）智能合约实施标准。
ERC-721描述了智能合约必须实现的接口，以便符合要求。NFT合约中会有以下功能：

```rust
/// This emits when ownership of any NFT changes by any mechanism.
Transfer(from, to, tokenId);

/// This emits when the approved address for an NFT is changed or reaffirmed.
ApprovalForAll(_owner, operator, approved);

/// Count all NFTs assigned to an owner
balanceOf(owner): integer;

/// Find the owner of an NFT
ownerOf(tokenId): address;

/// Transfers the ownership of an NFT from one address to another address
safeTransferFrom(from, to, tokenId, data: optional);

/// Transfer ownership of an NFT
transferFrom(from, to, tokenId);

/// Change or reaffirm the approved address for an NFT
approve(approved, tokenId);

/// Enable or disable approval for a third party ("operator") to manage
setApprovalForAll(operator, approved);

/// Get the approved address for a single NFT
getApproved(tokenId): address;

/// @notice Query if an address is an authorized operator for another address
isApprovedForAll(owner, operator): bool;
```

然而，隐含的是，一些函数 -- 如 `mint` 和 `burn` -- 未来也将在合约中实现。这些功能的实现可能有所不同，因此会出现一系列 NFT 集合。

## Gear Non-Fungible Token

Gear 提供一个[GNFT 接口库](https://github.com/gear-tech/apps/tree/master/non-fungible-token)，具有协议中描述的功能。

:::note

请注意，该接口 **还不支持** `ERC721TokenReceiver` 和 `SafeTransferFrom` 等功能。然而，这些功能将尽快被添加。

:::

NonFungibleToken 接口引入了 `NonFungibleTokenBase`，它包含以下函数签名：

```rust
/// called during the NFT contract deployment
fn init(&mut self, name: String, symbol: String, base_uri: String);

/// Transfer an NFT item from current owner to the new one
fn transfer(&mut self, rom: &ActorId, to: &ActorId, token_id: U256);

/// Gives a right to the actor to manage the specific token
fn approve(&mut self, owner: &ActorId, spender: &ActorId, token_id: U256);

/// Enables or disables the actor to manage all the tokens the owner has
fn approve_for_all(&mut self, owner: &ActorId, operator: &ActorId, approved: bool);
```

上述函数对 NFT 的实现至关重要，并在 Gear 提供的接口中实现。

GNFT 接口库的核心部分是 `NonFungibleToken` 结构。它包含了 `NonFungibleTokenBase` 特性中定义的函数的实现，以及一些有用的辅助函数，如 `authorized_actor`、`is_token_owner` 等。

Gear 的 GNFT 接口是一个库，可以作为编写 NFT 智能合约的核心块。让我们来看看这个接口如何组成一个完整的合约。

## NFT 范例

在本节中，我们将参考 Gear 提供的 NFT 智能合约的实现实例 [代码链接](https://github.com/gear-tech/apps/tree/master/nft-example)。

首先，智能合约接受的 `Actions` 应符合 ERC-721 的规定：

```rust
pub enum Action {
    Mint,
    Burn(U256),
    Transfer(TransferInput),
    Approve(ApproveInput),
    ApproveForAll(ApproveForAllInput),
    OwnerOf(U256),
    BalanceOf(H256),
}
```

状态查询方法完成接口遵从性：

```rust
pub enum State {
    BalanceOfUser(H256),
    TokenOwner(U256),
    IsTokenOwner(TokenAndUser),
    GetApproved(U256),
}
```

Gear 的 ERC-721 库包含了对 `transfer`、`approve` 和 `approve_for_all` **Actions** 的完整实现。让我们通过导入该库并将其存储在智能合约的状态中来利用它们。

请记住，该库还包含多个有用的结构，如 `Approve`、`ApproveForAll` 和 `Transfer`，这些结构可以重用于自定义实现。

```rust
pub struct NFT {
    pub tokens: NonFungibleToken,
    pub token_id: U256,
    pub owner: ActorId,
}
```

注意来自 GNFT 库的 `NonFungibleToken` 结构是如何在状态中组成的；这允许在合同方法的实现中重复使用它提供的功能。

如上所述，我们还需要为 `mint` 和 `burn` 方法进行自定义实现。

```rust
impl NFT {
    fn mint(&mut self) {
      // custom mint implementation
      ...
    }

    fn burn(&mut self, token_id: U256) {
      // custom burn implementation
      ...
    }
}
```

现在，在 `handle` 方法中，我们可以使用上面描述的 `mint` 和 `burn` 来实现 `Mint` 和 `Burn` Actions。对于其余的 Actions（即 `Approve`、`ApproveForAll`、`Transfer`、`OwnerOf` 和 `BalanceOf`），我们可以重新使用 Gear 的 GNFT 库来实现。

状态查询也是如此，即 `metastate` 方法：库函数可以重复使用查询实现。

例如，`Mint` Action 可以简单地实现为：

```rust
Action::Mint => {
    CONTRACT.mint();
}
```

同样地，看看利用所提供的接口的 `Approve`：

```rust
Action::Approve(input) => {
    CONTRACT.tokens.approve(
        &msg::source(),
        &ActorId::new(input.to.to_fixed_bytes()),
        input.token_id,
    );
}
```

## 总结

Gear 提供了一个可重复使用的[库](https://github.com/gear-tech/apps/tree/master/non-fungible-token/src)，具有 GNFT 协议的核心功能。通过使用对象组合，该库可以在自定义的 NFT 合约实现中使用，以减少重复代码。

Gear 提供的合约实例的源代码可在 GitHub 上找到 [nft-example/src](https://github.com/gear-tech/apps/tree/master/nft-example/src)。

也请看基于 `gtest` 的智能合约测试实现的例子：[nft-example/tests](https://github.com/gear-tech/apps/tree/master/nft-example/tests)。

关于测试在 Gear 上编写的智能合约的更多细节，请参考这篇文章 [程序测试](/developing-contracts/testing.md)。